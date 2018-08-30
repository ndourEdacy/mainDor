(function() {
        
        var choix = 'nom_modele';
        var myTable = 'modele';
        var myChoice = document.getElementById('liste_recherche');
        // var contenu = myChoice.innerHTML;
        myChoice.onchange = function () {
            var options = this.value.split("-");
            choix = options[0];
            myTable = options[1];
        };
        
        var searchElement = document.getElementById('recherche'),
        results = document.getElementById('liste_pub'),
        selectedResult = -1, // Permet de savoir quel résultat est sélectionné : -1 signifie « aucune sélection »
        previousRequest, // On stocke notre précédente requête dans cette variable
        previousValue = searchElement.value; // On fait de même avec la précédente valeur
        
        function getResults(keywords) { // Effectue une requête et récupère les résultats
            var xhr = new XMLHttpRequest();
            xhr.open('GET', './ajax-search.php?choixTailleur=' + choix + '&keywordsTailleur='+ encodeURIComponent(keywords));
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    displayResults(xhr.responseText);
                }
            };
            xhr.send(null);
            return xhr;
        }
        
        function displayResults(response) { // Affiche les résultats d'une requête
            // results.style.display = response.length ? '' : 'none';
            // On cache le conteneur si on n'a pas de résultats
            if (response.length) {
                var myData;
                var myTaille = 0;
                var tableau = response.split("||");
                var taille = tableau.length;
                var myHtml = '';
                var erreur = "<?php echo (isset($erreur_photo)) ? $erreur_photo : '';?>";

                for (var i = 0; i < taille; i++) {
                    var myData = tableau[i].split("|");
                    // myTaille = myData.length;
                    myHtml += '<div class="une_publication">\
                                           <div id="info_modele">\
                                                <span id="nom_modele-' + myData[0] + '">Nom : ' + myData[2] + '</span>\
                                               <span id="prix_modele-' + myData[0] + '">Prix : ' + myData[4] + '</span>\
                                               <div id="img_modele-' + myData[0] + '"><img style="min-width:305px; min-height: 250px; max-width:305px; max-height: 250px;" src="avatar/' + myData[1] + '/' + myData[5] + '" alt="image du modele"/></div>\
                                           </div>\
                                           <div class="btn_maj"><div class="overlay" id="boite_dialog_form">\
                                                           <div id="fermerBoite" onclick="fermer_formulaire();" style="float: right; margin-right: 5px; margin-top: 5px;"><img src="cancel (8).png" alt="fermer" title="fermer"/></div></br>\
                                                           <div id="formulaire_modification">\
                                                               <form class="formulaire_modif" style="color:black;"   action="?modele_a_modifier=' + myData[0] + '" class="upload" onsubmit=" return  (verifier(this)>0) ? false : true;" method="post" enctype="multipart/form-data">\
                                                               <div class="form-group">\
                                                                       <label for="nom_modele">Nom du modele\
                                                                       <input type="text" name="nom_modele" class="nom_modele" id="modele' + myData[0] + '" value="' + myData[2] + '">\
                                                                       </label>\
                                                               </div>\
                                                               <div class="form-group">\
                                                                       <label for="prix">Prix\
                                                                       <input type="text" name="prix" class="prix" id="prix' + myData[0] + '" value="' + myData[4] + '">\
                                                                       </label>\
                                                               </div>\
                                                               <div class="form-group">\
                                                                       <span class="description_textarea" style="font-size:1em;">Description</span>\
                                                                       <textarea name="description" id="description" class="description" rows="4">' + myData[3] + '</textarea>\
                                                               </div>\
                                                               <div class="form-group" id="avatar_poste">\
                                                                       <label for="avatar-' + myData[0] + '"><span style="text-decoration:underline; font-size:1em; color: black;">Joindre une photo du modele</span>\
                                                                            <input type="file" name="avatar" id="avatar-' + myData[0] + '" style="display:none;" onchange="visualisation(this.files[0],' + myData[0] + ');">\
                                                                            <span class="indiquation_photo"  style="color:red; font-size:1em;" >' + erreur + '</span></label>\
                                                               </div>\
                                                                   <div class="form-group" >\
                                                                       <div class="apercu" id="apercu-' + myData[0] + '"><img style="min-width:310px; min-height: 300px; max-width:310px; max-height: 300px;" src="avatar/' + myData[1] + '/' + myData[5] + '" alt="image du modele"/></div>\
                                                               </div>\
                                                                </br>\
                                                               <div style="text-align: center;"> <input type="submit" value="Enregistrer" name="enregistrer_mofification"></div>\
                                                           </form>\
                                                           </div>\
                                                  </div>\
                                               <button class="btn" id="modifier" onclick="voir_formulaire(this,' + myData[0] + ');">Modifier</button>\
                                               <div class="statistique_appreciation">\
                                                    <div ><img class="jaime" src="like2.jpg" alt="j\'aime" title="j\'aime"><span style="color: rgb(178,78,173); font-size: 0.9em; float: right;  border: none;">' + myData[6] + '</span></div>\
                                                    <div ><img class="jaime_pas"  src="dislike2.png" alt="j\'aime pas" title="j\'aime pas"><span style="color: rgb(178,78,173); font-size: 0.9em; float: right; border: none;">' + myData[7] + '</span></div>\
                                                </div>\
                                               <button class="btn" id="supprimer"><a href="publication.php?modele_a_supprimer=' + myData[0] + '&amp;id_tailleur=' + myData[1] + '">Supprimer</a></button>\
                                           </div>\
                                    </div>';

                }
                results.innerHTML = myHtml; 
            }
            else {
                results.innerHTML = "<h3>Pas de résultats</h3>";
            }
        }
        
        searchElement.onkeyup = function(e) {
            e = e || window.event;
			if (searchElement.value != previousValue) { // Si le contenu du champ de recherche a changé
                previousValue = searchElement.value;
                if (previousRequest && previousRequest.readyState < 4) {
                    previousRequest.abort(); // Si on a toujours une requête en cours, on l'arrête
                } 
                previousRequest = getResults(previousValue); // On stocke la nouvelle requête
                selectedResult = -1; // On remet la sélection à zéro à chaque caractère écrit
            }
        };
        
    }) ();
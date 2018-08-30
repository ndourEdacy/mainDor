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
        results = document.getElementById('modeles'),
        selectedResult = -1, // Permet de savoir quel résultat est sélectionné : -1 signifie « aucune sélection »
        previousRequest, // On stocke notre précédente requête dans cette variable
        previousValue = searchElement.value; // On fait de même avec la précédente valeur
        
        function getResults(keywords) { // Effectue une requête et récupère les résultats
            var xhr = new XMLHttpRequest();
            xhr.open('GET', './ajax-search.php?choix=' + choix + '&keywords='+ encodeURIComponent(keywords) + '&table=' + encodeURIComponent(myTable));
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    displayResults(xhr.responseText);
                }
            };
            xhr.send(null);
            return xhr;
        }
        
        function displayResults(response) { // Affiche les résultats d'une requête
            results.style.display = response.length ? 'block' : 'none';
            // On cache le conteneur si on n'a pas de résultats
            if (response.length) {
                    results.innerHTML = response; 
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
        
                /*****************************AIME OU AIME PAS *****************************/
        var loveLinks = document.getElementsByClassName('love-me');
        
        for (var i = 0, c = loveLinks.length; i < c; i++) {
            var myLink = loveLinks[i];
            myLink.onclick = function(e) {
          
                e.preventDefault();
                var myNextSpan = this.nextElementSibling;
                var loveTable = this.getAttribute('data-table');
                var loveId = this.getAttribute('data-id');

                var xhr = getXMLHttpRequest();
                xhr.open('GET', './ajax-search.php?loveId=' + encodeURIComponent(loveId) + '&loveTable=' + encodeURIComponent(loveTable));
                xhr.onreadystatechange = function() {
                    if (xhr.readyState == 4 && xhr.status == 200) {
                        var nb = xhr.responseText;
                        myNextSpan.innerHTML = nb;
                    }
                };
                xhr.send(null);
                return xhr;
            };
        }
        
    }) ();
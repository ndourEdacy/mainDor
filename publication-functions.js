//L'image choisi par le tailleur sur le formulaire de publication
    			
          function fermer_formulaire(){

            var detail=document.getElementsByClassName('overlay');
            
            for(var i=0,c=detail.length;i<c;i++){

                detail[i].style.display='none';
            }

        }
        function voir_formulaire(element,id){
               
         fermer_formulaire();               //FERMERLA BOITE DEJA OUVERTE AVANT D'OUVRIR UNE AUTRE

        //recuperer l'image actuelle afficher (sinon c'est la derniere image choisi qui sera affichee meme si elle na pas ete enregistrer).
        $(function(){
           
             var identifiant='img_modele-'+id;                                 
             $('#apercu-'+id).load('publication.php '+'#'+identifiant,function(){
                 var detail=element.parentNode.firstChild;   
                    detail.style.display='block';
             });
         });
          

        }
				function visualisation(avatar,id) {
                                                                   
                                        var apercu = document.getElementById('apercu-'+id); //recuperrer l'id de la div ou afficher l'image
					
                                        var reader = new FileReader();
					reader.onload = function() {
                                            
						var fils = apercu.firstChild;
						if (fils)
							apercu.removeChild(fils);
							
						var imgElement = document.createElement('img');
						imgElement.style.maxWidth = '300px';
						imgElement.style.minWidth = '300px';
						imgElement.style.maxHeight = '300px';
						imgElement.style.minHeight = '300px';
						imgElement.src = this.result;
						apercu.appendChild(imgElement);
					};
					reader.readAsDataURL(avatar);
				}                                               
    


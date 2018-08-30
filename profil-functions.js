 /*            Modification du profil                       */
                   
                                             //Image du profil
                                
				var photo_profil = document.getElementById('profil');
				var apercu_profil = document.getElementById('photo-profil');
				
				photo_profil.onchange = function() {
					var avatar = this.files[0];
					visualisation_profil(avatar); 
				};
				
				function visualisation_profil(avatar) {
					var reader = new FileReader();
					reader.onload = function() {
						var fils = apercu_profil.firstChild;
						if (fils)
							apercu_profil.removeChild(fils);
							
						var imgElement = document.createElement('img');
						imgElement.style.maxWidth = '160px';
						imgElement.style.minWidth = '160px';
						imgElement.style.maxHeight = '160px';
						imgElement.style.minHeight = '160px';
						imgElement.src = this.result;
                                                imgElement.alt = 'profil';
						apercu_profil.appendChild(imgElement);
					};
					reader.readAsDataURL(avatar);
				}
                                
                                
                                            //Champ du profil
				var enableBtn = document.getElementById('enable-me');
				
				enableBtn.onclick = function() {
					this.style.display = "none";	
					
					var myInputs = document.getElementsByClassName('label-input');
					var taille = myInputs.length;
					
					for (var i = 0; i < taille; i++) {
						myInputs[i].removeAttribute('disabled');
					}
					
					document.getElementById('update').style.display = "";	
					document.getElementById('profil-img').style.display = "";
				};
                                



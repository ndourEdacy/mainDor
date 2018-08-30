//L'image choisi par le tailleur sur le formulaire de publication
				var avatarElement = document.getElementById('avatar');
				var apercu = document.getElementById('apercu');
				
				avatarElement.onchange = function() {
					var avatar = this.files[0];
					visualisation(avatar); 
				};
				
				function visualisation(avatar) {
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
				
                                
                                


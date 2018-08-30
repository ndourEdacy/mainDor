<?php

session_start();

include 'connexion_bd.php';
include 'member-profil.php';
include 'upload-functions.php';
?>
<!DOCTYPE html>
<html lang="fr">
	<head>
		<meta charset="UTF-8">
		<title>Publication</title>
		<link rel="stylesheet"  href="main.css"/>
		<link rel="stylesheet"  href="headers.css"/>
		<link rel="stylesheet" href="publication.css"/>
		<link rel="stylesheet" href="upload2.css"/> 
	</head>
	
	<body>
     <!--                 Entete  de    page                  -->
            <?php include 'header2.php';?>
    <!--                 Entete  de    page                  -->
		<div class="container">
			<aside>                         				
				<div class="infos">
					<form action="upload.php" method="post" id='formulaire_profil' style='text-align: center;' enctype="multipart/form-data">
						<div class="photo-profil" style="position: relative">
							<div id='photo-profil' style="text-align: center;"><img src="avatar/<?php echo  $info['id'] .'/'.$info['avatar'] ;?>" alt="profil" style="min-width:160px; min-height:160px;  max-width:160px; max-height:160px; " ></div>                         
							<div id="profil-img" style="display:none; color: white; position: absolute; top: 125px; left: 45px; z-index: 100;" >
								<label class="label-info" for="profil"><span id="btn_modifier_photo_profil">Modifier</span>
									<input type="file"  name='profil' id='profil' style='display: none;'/>
								</label>
							</div>
						</div>
						<span id="indiquation_avatar" ><?php echo (isset($erreur_avatar)) ? $erreur_avatar : '';?></span>

						<label class="label-info" for="prenom">Prénom</label>
						<input class="label-input" type="text"  name="prenom" id="prenom" value="<?= $info['prenom'] ?>" disabled>
						<label class="label-info" for="nom">Nom</label>
						<input class="label-input" type="text"  name="nom" id="nom" value="<?= $info['nom'] ?>" disabled>
						<label class="label-info" for="complexe">Complexe</label>
						<input class="label-input" type="text"  name="complexe" id="complexe" value="<?= $info['complexe'] ?>" disabled>
                                            
						<label class="label-info" for="telephone">Téléphone  </label>                                               
						<input class="label-input" type="text"  name="telephone" id="telephone"  value="<?= $info['telephone'] ?>" disabled>
						<label class="label-info" for="adresse">Adresse</label>
						<input class="label-input" type="text" name="adresse" id="adresse" value="<?= $info['adresse'] ?>" disabled>                           
						<div style="text-align: center;"></br><input type="submit" id="update" style="display:none; " name='enregistrer' value="Enregistrer"></div>
					</form>
					<div style="text-align: center;"><button id="enable-me">Mettre a jour</button></div>
				</div>
			</aside>
                       			
			<section>
				<form id='formulaire_publication' action="upload.php" class="upload" method="post" enctype="multipart/form-data">
					<div class="form-group">
						<label for="nom_modele">Nom du modele</label>
							<input type="text" name="nom_modele" id="nom_modele">
					</div>
					<div class="form-group">
						<label for="prix">Prix</label>
							<input type="text" name="prix" id="prix">                    
					</div>
					<div class="form-group">
                        <span id="description_textarea">Description</span>
						<textarea name="description" id="description" class="description" rows="4"></textarea>                                          
					</div>
					<div class="form-group" id="avatar_poste">			
						<label for="avatar"><span style="text-decoration:underline;">Joindre une photo du modele</span></label></br>
						<input type="file" id="avatar" name="avatar"  style='display: none;'/>
						<span id="indiquation_photo" ><?php echo (isset($erreur_photo)) ? $erreur_photo : '';?></span>
					</div>
					<div class="form-group">
                    <!--			<label for="">Apercu</label>-->
						<div id="apercu"></div>
					</div>
					</br>
                    <div style="text-align: center;"><input type="submit" value="Poster" name="poster"  id="poster"  /></div></br>
				</form>
			</section>
		</div>
		<script src="jquery.js"></script>
		<script  src="setting-button.js"  type="text/javascript" ></script>
		<script  src="defilement.js"  type="text/javascript" ></script>
		<script  src="profil-functions.js"  type="text/javascript" ></script>
		<script  src="upload-functions.js"  type="text/javascript" ></script>
		<script  src="profil-form-control.js"  type="text/javascript" ></script>
		<script  src="upload-form-control.js"  type="text/javascript" ></script>
		<script>
			$(function(){
								
				//                                 Masquer la zone de rechercher de la page login
				$('#zoneRecherche').hide();
				//                                 Masquer la zone de rechercher de la page login
						
			});        
		</script>

		<script>
		var boutton1=document.getElementsByTagName('li');
				boutton1[2].id='active_page';  
		</script>
	</body>
</html>
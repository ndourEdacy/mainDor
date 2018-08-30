<?php

session_start();

include 'connexion_bd.php';
include 'member-profil.php';
include 'setting-functions.php';
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
					<form action="setting.php" method="post" id='formulaire_profil' style='text-align: center;' enctype="multipart/form-data">
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
                                            
						<label class="label-info" for="telephone">Téléphone</label>                                                 
						<input class="label-input" type="text"  name="telephone" id="telephone"  value="<?= $info['telephone'] ?>" disabled>
						<label class="label-info" for="adresse">Adresse</label>
						<input class="label-input" type="text" name="adresse" id="adresse" value="<?= $info['adresse'] ?>" disabled>                           
						<div style="text-align: center;"></br><input type="submit" id="update" style="display:none;" name='enregistrer' value="Enregistrer"></div>
					</form>
					<div style="text-align: center;"><button id="enable-me">Mettre a jour</button></div>
				</div>
			</aside>
                       			
			<section>
				<form id='formulaire_parametre' action="setting.php" class="setting" method="post" style="background-color: white; color:black;">
					<div class="form-group">
						<label for="pseudo">Nouveau Pseudo</label> 
                        <input type="text" name="pseudo" id="pseudo" value="<?php echo $_SESSION['login'];?>">          
					</div>
					<div class="form-group">
						<label for="new_mdp">Nouveau Mot de Passe</label>
                        	<input type="password" name="new_mdp" id="new_mdp">
					</div>
					<div class="form-group">
						<label for="new_mdp_conf">Confirmation nouveau Mot de Passe</label>
                        <input type="password" name="new_mdp_conf" id="new_mdp_conf">
					</div>
					<div class="form-group">
						<label for="mdp_actuel">Mot de Pass Actuel</label>
						<input type="password" name="mdp_actuel" id="mdp_actuel">
						<span class="indiquation_mdp_actuel" style="color: red; text-align: center;"><?php echo (isset($non_valide)) ? $non_valide : '';?><span>                                                
					</div>
					</br>
                    <div style="text-align: center;"><input type="submit" value="Enregistrer" name="enregistrer_parametres"  id="enregistrer_parametres"  /></div></br>
				</form>
			</section>
			
		
		</div>
		<script src="jquery.js"></script>
        <script  src="setting-button.js"  type="text/javascript" ></script>
        <script  src="defilement.js"  type="text/javascript" ></script>
        <script  src="profil-functions.js"  type="text/javascript" ></script>
        <script  src="profil-form-control.js"  type="text/javascript" ></script>
        <script  src="setting-form-control.js"  type="text/javascript" ></script>
        <script>
                        
                        $(function(){
                           
                                  //                                 Masquer la zone de rechercher de la page login
                                    $('#zoneRecherche').hide();
                                    //                                 Masquer la zone de rechercher de la page login         
                        });
                        
                        
        </script>
	</body>		
	
</html>
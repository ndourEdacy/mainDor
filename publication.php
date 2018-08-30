<?php 
session_start();
include 'connexion_bd.php';
include 'member-profil.php';
include 'modeles-functions.php';
?>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <script src="jquery.min.js"></script>
        <link rel="stylesheet"  href="main.css"/>
        <link rel="stylesheet"  href="headers.css"/>
        <link rel="stylesheet" href="publication.css"/> 
        <link rel="stylesheet" href="upload2.css"/> 
        
        <title>LA MAIN D'OR</title>
      
    </head>
    <body>
    <!--                 Entete  de    page                  -->
            <?php include 'header2.php';?>
    <!--                 Entete  de    page                  -->
        <div class="container">
			<aside>                         				
				<div class="infos">
					<form action="publication.php" method="post" id='formulaire_profil' style='text-align: center;' enctype="multipart/form-data">
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
                       
                    <section id="liste_pub">
       <!--                <div id="liste_pub">-->

                           <?php

                               if(isset($publication)){

                                   foreach ($publication as $inf){
                                       ?>

                                        <div class="une_publication">
                                           <div id="info_modele">
                                                <span id="<?php echo 'nom_modele-'.$inf['id_modele'];?>">Nom :<?php echo (isset($inf['nom_modele'])) ?$inf['nom_modele'] : 'vide';?></span>
                                               <span id="<?php echo 'prix_modele-'.$inf['id_modele'];?>">Prix : <?php echo (isset($inf['prix'])) ?$inf['prix'] : 'vide';?></span>
                                               <div id="<?php echo 'img_modele-'.$inf['id_modele'];?>"><img style="min-width:305px; min-height: 250px; max-width:305px; max-height: 250px;" src="avatar/<?php echo (isset($inf['avatar_modele'])) ? $_SESSION['id_tailleur'].'/'.$inf['avatar_modele'] : '';?>" alt="image du modele"/></div>
                                           </div>

                                           <div class="btn_maj"><div class='overlay' id="boite_dialog_form">
                                                           <div id='fermerBoite' onclick="fermer_formulaire();" style="float: right; margin-right: 5px; margin-top: 5px;"><img src="cancel (8).png" alt='fermer' title='fermer'/></div></br>
                                                           <div id="formulaire_modification">

                                                               <form class="formulaire_modif" style="color:black;"   action="?modele_a_modifier=<?php echo (isset($inf['id_modele'])) ?$inf['id_modele'] : 'vide';?>" class="upload" onsubmit=" return  (verifier(this)>0) ? false : true;" method="post" enctype="multipart/form-data">
                                                               <div class="form-group">
                                                                       <label for="nom_modele">Nom du modele</label>
                                                                       <input type="text" name="nom_modele" class="nom_modele" id="<?php echo 'modele'.$inf['id_modele'];?>" value="<?php echo (isset($inf['nom_modele'])) ?$inf['nom_modele'] : 'vide';?>">
                                                                       
                                                               </div>
                                                               <div class="form-group">
                                                                       <label for="prix">Prix</label>
                                                                       <input type="text" name="prix" class="prix" id="<?php echo 'prix'.$inf['id_modele'];?>" value="<?php echo (isset($inf['prix'])) ?$inf['prix'] : 'vide';?>">
                                                                       
                                                               </div>
                                                               <div class="form-group">
                                                                       <span class="description_textarea" style="font-size:1em;">Description</span>
                                                                       <textarea name="description" id="description" class="description" rows="4"><?php echo (isset($inf['description'])) ?$inf['description'] : 'vide';?></textarea>
                                                               </div>
                                                               <div class="form-group" id="avatar_poste">
                                                                       <label for="<?php echo 'avatar-'.$inf['id_modele'];?>"><span style="text-decoration:underline; font-size:1em; color: black;">Joindre une photo du modele</span></label>
                                                                            <input type="file" name="avatar" id="<?php echo 'avatar-'.$inf['id_modele'];?>" style="display:none;" onchange="visualisation(this.files[0],<?php echo $inf['id_modele'];?>);">
                                                                            <span class="indiquation_photo"  style="color:red; font-size:1em;" ><?php echo (isset($erreur_photo)) ? $erreur_photo : '';?></span>
                                                               </div>
                                                                   <div class="form-group" >
<!--                                                                       <label for="">Apercu</label>-->
                                                                       <div  class="apercu" id="<?php echo 'apercu-'.$inf['id_modele']?>"><img style="min-width:300px; min-height: 300px; max-width:300px; max-height: 300px;" src="avatar/<?php echo (isset($inf['avatar_modele'])) ? $inf['id_tailleur'].'/'.$inf['avatar_modele'] : '';?>" alt="image du modele"/></div>
                                                               </div>
                                                                </br>
                                                               <div style="text-align: center;"> <input type="submit" value="Enregistrer" name="enregistrer_mofification"></div>
                                                           </form>
                                                           </div>

                                                  </div>
                                               <button class="btn" id="modifier" onclick="voir_formulaire(this,<?php echo$inf['id_modele']?>);">Modifier</button>
                                               <div class="statistique_appreciation">
                                                    <span class="like-block">
                                                            <img class="jaime" src="like2.jpg" alt="j'aime" title="j'aime">
                                                            <span class="like-number"><?= $inf['aime'] ?></span>
                                                        </span>
                                                        <span class="like-block">
                                                            <img class="jaime_pas"  src="dislike2.png" alt="j'aime pas" title="j'aime pas">
                                                            <span class="like-number"><?= $inf['aime_pas'] ?></span>
                                                        </span>
                                                </div>
                                               <button class="btn" id="supprimer"><a href="publication.php?modele_a_supprimer=<?php echo (isset($inf['id_modele'])) ?$inf['id_modele'] : '';?>&amp;id_tailleur=<?php echo $_SESSION['id_tailleur']?>">Supprimer</a></button>
                                           </div> 

                                    </div>


                                       <?php
                                   }
                               }

                           ?>

                       <!--</div>-->
               </section>
	</div>
        
 
  <script src="jquery.js"></script>
  <script  src="defilement.js"  type="text/javascript" ></script>
  <script  src="publication-functions.js"  type="text/javascript" ></script>
  <script  src="searchTailleur.js"  type="text/javascript" ></script>
  <script  src="setting-button.js"  type="text/javascript" ></script>
  <script  src="profil-functions.js"  type="text/javascript" ></script>
  <script  src="profil-form-control.js"  type="text/javascript" ></script>
  <script  src="publication-form-control.js"  type="text/javascript" ></script>

  
  <script>
    var boutton1=document.getElementsByTagName('li');
              boutton1[0].id='active_page';  
  </script>             
    
</body>
    
  

    
</html>
<?php

if(isset($_POST['poster'])) {
        $nom_modele = htmlspecialchars(trim($_POST['nom_modele']));
        $description = htmlspecialchars(trim($_POST['description']));
        $prix = htmlspecialchars(trim($_POST['prix']));

	if (isset($_FILES['avatar']) AND $_FILES['avatar']['error'] == 0) {
		$avatar = $_FILES['avatar'];
                $infosfichier = pathinfo($_FILES['avatar']['name']);
                $extension_upload = $infosfichier['extension'];
                $extensions_autorisees = array('jpg', 'jpeg', 'gif','png');
                if(in_array($extension_upload, $extensions_autorisees)){
                    $nom_image = basename($avatar['name']);
                    $chemin = 'avatar/'.$_SESSION['id_tailleur'].'/'.  $nom_image;

                    if (move_uploaded_file($avatar['tmp_name'], $chemin)) {

                            $requete = $bdd->prepare(
                                    'INSERT INTO modele SET id_tailleur = :id, nom_modele = :nom, description = :desc,
                                    prix = :prix, avatar_modele = :avatar'
                            );

                            $requete->execute(array(
                                    'id' => $_SESSION['id_tailleur'],
                                    'nom' => $nom_modele,
                                    'desc' => $description,
                                    'prix' => $prix,
                                    'avatar' =>  $nom_image
                            ));
                    }
                }
                else{
                    $erreur_photo='Veillez choisir un fichier image';
                }
		
	}
        else{
                    $erreur_photo='Photo absent ou erreur de chargement ';
       }
}	

?>
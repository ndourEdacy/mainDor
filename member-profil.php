<?php

//Recuperer les info du tailleur
global $bdd;
$req = $bdd->prepare('SELECT * FROM tailleur WHERE id = :id');
$req->execute(array(
	'id' => $_SESSION['id_tailleur']
));

$info = $req->fetch();
$req->closeCursor();

if(isset($_POST['enregistrer'])) {
    // extract($_POST);
         $prenom = htmlspecialchars(trim($_POST['prenom']));
         $nom = htmlspecialchars(trim($_POST['nom']));
         $complexe = htmlspecialchars(trim($_POST['complexe']));
         $telephone = htmlspecialchars(trim($_POST['telephone']));
         $adresse = htmlspecialchars(trim($_POST['adresse']));
         
    if (isset($_FILES['profil']) AND $_FILES['profil']['error'] == 0) {        
		$avatar = $_FILES['profil'];
                $infosfichier = pathinfo($_FILES['profil']['name']);
                $extension_upload = $infosfichier['extension'];
                $extensions_autorisees = array('jpg', 'jpeg', 'gif','png');
                if(in_array($extension_upload, $extensions_autorisees)){
                    $nom_avatar = basename($avatar['name']);
                    $chemin = 'avatar/'.$_SESSION['id_tailleur'].'/'. $nom_avatar;

                    if (move_uploaded_file($avatar['tmp_name'], $chemin)) {
                        
                        if(isset($erreur_avatar)){
                            unset($erreur_avatar);
                        }
                            $requete = $bdd->prepare(
                                    'UPDATE tailleur SET prenom = :prenom, nom = :nom, complexe = :complexe,
                                        adresse = :adresse, telephone = :telephone,avatar = :avatar WHERE id=:id'
                            );

                            $requete->execute(array(
                                    'id'=>$_SESSION['id_tailleur'],
                                    'prenom' => $prenom,
                                    'nom' => $nom,
                                    'complexe' => $complexe,
                                    'adresse' => $adresse,
                                    'telephone'=>$telephone,
                                    'avatar' => $nom_avatar
                            ));
                    }
                }
                else{
                    $erreur_avatar='Veillez choisir un fichier image';
                }
		
	}
        else{
              if(isset($erreur_avatar)){
                            unset($erreur_avatar);
              }
                            $requete = $bdd->prepare(
                                    'UPDATE tailleur SET prenom = :prenom, nom = :nom, complexe = :complexe,
                                        adresse = :adresse, telephone = :telephone  WHERE id=:id'
                            );

                            $requete->execute(array(
                                    'id'=>$_SESSION['id_tailleur'],
                                    'prenom' => $prenom,
                                    'nom' => $nom,
                                    'complexe' => $complexe,
                                    'adresse' => $adresse,
                                    'telephone'=>$telephone,
                                    
                            ));
                          
        }
        header('Location:publication.php');
}	
?>

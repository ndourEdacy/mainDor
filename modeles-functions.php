<?php

/*             Recupperer les publications                */
function recupperer_publiction(){
        global $bdd;
        
        $req = $bdd->prepare('SELECT * FROM modele WHERE id_tailleur = :id');
        $req->execute(array(
                'id' => $_SESSION['id_tailleur']
        ));

        $info=$req->fetchAll();
        $req->closeCursor();
        return $info;
}
$publication=  recupperer_publiction();

/*             Recupperer les publications                */

/*                   Modifier un modelel publier               */
function modifier_modele1($id_tailleur,$id_modele,$nom_modele,$description,$prix,$nom_avatare){
       global $bdd;
    
       $requete = $bdd->prepare(
				'UPDATE modele SET  nom_modele = :nom, description = :desc,
				prix = :prix , avatar_modele=:nom_avatar WHERE id_modele=:id_modele AND id_tailleur = :id'
			);
			
			$requete->execute(array(
                                'id_modele' => $id_modele,
				'id' => $id_tailleur,
				'nom' => $nom_modele,
				'desc' => $description,
				'prix' => $prix,
                                'nom_avatar' =>$nom_avatare
				
			));
}
function modifier_modele($id_tailleur,$id_modele,$nom_modele,$description,$prix){
       global $bdd;
    
       $requete = $bdd->prepare(
				'UPDATE modele SET  nom_modele = :nom, description = :desc,
				prix = :prix  WHERE id_modele=:id_modele AND id_tailleur = :id'
			);
			
			$requete->execute(array(
                                'id_modele' => $id_modele,
				'id' => $id_tailleur,
				'nom' => $nom_modele,
				'desc' => $description,
				'prix' => $prix
                                
				
			));
}

/*                   Modifier un modelel publier               */

/*verifier si l'utilisateur veut modifier un modele  */
                  
    if(isset($_GET['modele_a_modifier'] ,$_POST['enregistrer_mofification']) && !empty($_GET['modele_a_modifier']) ){ //Verifier si les parametre de l'url sont fornis et qu'elles ne sont pas vide
       
      //Parser les valeur            
       $id_modele=(int) $_GET['modele_a_modifier'];
     
    //    extract($_POST);
        $nom_modele = htmlspecialchars(trim($_POST['nom_modele']));
        $description = htmlspecialchars(trim($_POST['description']));
        $prix = (int) $_POST['prix'];
        $nom_image = htmlspecialchars(trim($_POST['nom_image']));
       
        if (isset($_FILES['avatar']) AND $_FILES['avatar']['error'] == 0) {
            
              
                    $avatar = $_FILES['avatar'];
                    $nom_image = basename($avatar['name']);
                    $chemin = 'avatar/'.$_SESSION['id_tailleur'].'/' . $nom_image;
                    $infosfichier = pathinfo($_FILES['avatar']['name']);
                    $extension_upload = $infosfichier['extension'];
                    $extensions_autorisees = array('jpg', 'jpeg', 'gif','png');
                    if(in_array($extension_upload, $extensions_autorisees)){
                        if (move_uploaded_file($avatar['tmp_name'], $chemin)) {

                            modifier_modele1($_SESSION['id_tailleur'],$id_modele,$nom_modele,$description,$prix,$nom_image);
                             header('Location:publication.php');
                        }
                    }
                    else{
                         $erreur_photo='Veillez choisir un fichier image';
                    }
	
            
        }
        else {
               modifier_modele($_SESSION['id_tailleur'],$id_modele,$nom_modele,$description,$prix);
                header('Location:publication.php');
        }
       
          
   }  
   
   /*verifier si l'utilisateur veut modifier un modele  */
   
    /*                   Supprimer un modelel publier                 */
     
    function supprimer_modele($id_tailleur,$id_modele){
        
        global $bdd;
        $req=$bdd->prepare('DELETE FROM modele WHERE id_modele=:id_modele AND id_tailleur=:id_tailleur');
        $req->execute(array
                        (
                            'id_modele'=>$id_modele,
                            'id_tailleur'=>$id_tailleur
                        )
                     );
        
    }
/*                  verifier si l'utilisateur veut supprimer un modele                  */
    if(isset($_GET['modele_a_supprimer'],$_GET['id_tailleur']) && !empty($_GET['modele_a_supprimer']) && !empty($_GET['id_tailleur'])){
       
       
        
        $id_tailleur=(int) $_GET['id_tailleur'];      
        $id_modele=(int) $_GET['modele_a_supprimer'];
       
        supprimer_modele($id_tailleur, $id_modele);
   
        header('Location:publication.php');
} 

/*                  verifier si l'utilisateur veut supprimer un modele                  */

?>

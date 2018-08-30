<?php
function connecter_membre($login,$mdp){
    
    global $bdd;
    
    $req = $bdd->prepare('SELECT id,login FROM tailleur WHERE login=:login AND pass=:pass');
    $req->execute(array(
                    
                'login'=>$login,
                'pass'=>$mdp
    ));
    
    $info = $req->fetch();
    $req->closeCursor();
    return $info['id'];
}

if(isset($_POST['connexion'])){
    
    // extract($_POST);
    $identifiant = htmlspecialchars(trim($_POST['identifiant']));
    $mot_de_pass = htmlspecialchars(trim($_POST['mot_de_pass']));

    if(isset($connexion_error)){
unset ($connexion_error);    
    }
    $resultat=connecter_membre($identifiant, $mot_de_pass);
    if(!empty($resultat)){
       $_SESSION['id_tailleur']=$resultat;
       $_SESSION['login']=$identifiant;
      header('Location:publication.php');
    }
    else{
        
        $connexion_error='Verifier vos parametre';
    }
}
?>

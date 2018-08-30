<?php

/*            Modification des parametres de conexion         */
function recuperer_mot_de_pass()
{
    global $bdd;
        
    $req=$bdd->prepare('SELECT pass FROM tailleur WHERE id=:id_tailleur');
    $req->execute(
            array(          
                    'id_tailleur'=>$_SESSION['id_tailleur']                        
                )                 
            );

    $resultat=$req->fetch();
    $req->closeCursor();
    foreach ($resultat as $id){
        return $id;
    }
}
function  modifier_parametre($pseudo,$new_mdp)
{
    global $bdd;
        
    $req=$bdd->prepare('UPDATE tailleur SET login=:login , pass=:pass WHERE id=:id_tailleur');
    $req->execute(
            array(          
                    'id_tailleur'=>$_SESSION['id_tailleur'],
                    'login'=>$pseudo,
                    'pass'=>$new_mdp
                )                 
            );

 
    $req->closeCursor();
   
}
if(isset($_POST['enregistrer_parametres']))
{
    // extract($_POST);
    $mdp_actuel = htmlspecialchars(trim($_POST['mdp_actuel']));
    $pseudo = htmlspecialchars(trim($_POST['pseudo']));
    $new_mdp = htmlspecialchars(trim($_POST['new_mdp']));
    
   if(isset($non_valide)){
       unset($non_valide);
   }
   $mon_mdp=recuperer_mot_de_pass();
    if($mdp_actuel===$mon_mdp)
    {
             
        modifier_parametre($pseudo,$new_mdp);
    }
    else
    {                 

        $non_valide="Verifier votre mot de passe";
    }
}
?>
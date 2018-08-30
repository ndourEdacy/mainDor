<?php

/*                         Recupperer les publications                     */
function recupperer_publiction(){
        global $bdd;
        
        $req = $bdd->prepare('SELECT * FROM modele WHERE id_tailleur = :id ORDER BY aime DESC LIMIT 3');
        $req->execute(array(
                'id' => $_SESSION['id_tailleur']
        ));

        $info=$req->fetchAll();
        $req->closeCursor();
        return $info;
}

$publication=  recupperer_publiction(); 
?>

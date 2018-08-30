<?php
session_start();
if (isset($_GET['choix']) && isset($_GET['keywords'])) {
	$choix = $_GET['choix'];
	$keywords = $_GET['keywords'];
	$table = $_GET['table'];
	
	include 'connexion_bd.php';
	global $bdd;
	
	if ($keywords != '') {
		$req = $bdd->prepare('SELECT * FROM ' . $table . ' WHERE ' . $choix . ' LIKE :key');
		$req->execute(array(
			'key' => $keywords . '%'
		));
		
		$html = '';
		if ($table == 'modele') {
			while($donnes = $req->fetch())
			{
					$html .= '<div class="model"><div class="presentation_modele">';
					$html .= '<a href="acceuil.php?id=' . $donnes['id_modele'] . '">';
					$html .= '<img src="avatar/'.$donnes['id_tailleur'].'/'.$donnes["avatar_modele"].'" style="min-width:300px; min-height: 300px; max-width:300px; max-height: 300px;"/>';
					$html .= '<div id="monte">';
					$html .= 'Modele : ' . $donnes["nom_modele"].'<br>Prix : '.$donnes["prix"].' FCFA <br>description : '.$donnes["description"];
					$html .= '</div></a></div>';
					$html .='<div class="appreciation">';
                                        $html .= '<div class="aime"><a  href="#">J\'aime</a> <span class="nombre_jaime" style="color:red;">20</span></div>';
                                        $html .= '<div class="non_aime"><a  href="#">J\'aime pas</a><span class="nombre_jaime_pas" style="color:red;"> 5</span></div>';
                                        $html .= '</div></div>';
			}
		}
		else {
			while($donnes = $req->fetch())
			{
					$html .= '<div class="model"><div class="presentation_modele">';
					$html .= '<a href="acceuil.php?id_tailleur=' . $donnes['id'] . '">';
					$html .= '<img src="avatar/'.$donnes['id'].'/'. $donnes["avatar"].'" style="min-width:300px; min-height: 300px; max-width:300px; max-height: 300px;"/>';                                     
					$html .= '<div id="monte">';
					$html .= 'Nom : ' . $donnes["prenom"] . ' ' . $donnes["nom"] . '<br>Complexe : '.$donnes["complexe"].' FCFA <br>Adresse : '.$donnes["adresse"];
					$html .= '</div></a></div>';
                                         $html .= '</div>';
//					$html .='<div class="appreciation">';
//                                        $html .= '<div class="aime"><a  href="#">J\'aime</a> <span class="nombre_jaime" style="color:red;">20</span></div>';
//                                        $html .= '<div class="non_aime"><a  href="#">J\'aime pas</a><span class="nombre_jaime_pas" style="color:red;"> 5</span></div>';
//                                        $html .= '</div>';
			}
		}
		
		if ($html == '')
			$html = '<h3>Pas de résultats</h3>';
		echo $html;
	}
	else {
		$req = $bdd->query('SELECT * FROM ' . $table);	
		
		$html = '';
		if ($table == 'modele') {
			while($donnes = $req->fetch())
			{
					$html .= '<div class="model"><div class="presentation_modele">';
					$html .= '<a href="acceuil.php?id=' . $donnes['id_modele'] . '">';
					$html .= '<img src="avatar/'.$donnes['id_tailleur'].'/'.$donnes["avatar_modele"].'" style="min-width:300px; min-height: 300px; max-width:300px; max-height: 300px;"/>';
					$html .= '<div id="monte">';
					$html .= 'Modele : ' . $donnes["nom_modele"].'<br>Prix : '.$donnes["prix"].' FCFA <br>description : '.$donnes["description"];
					$html .= '</div></a></div>';
					$html .='<div class="appreciation">';
                    $html .= '<div class="aime"><a  href="#">J\'aime</a> <span class="nombre_jaime" style="color:red;">20</span></div>';
                    $html .= '<div class="non_aime"><a  href="#">J\'aime pas</a><span class="nombre_jaime_pas" style="color:red;"> 5</span></div>';
                    $html .= '</div></div>';
			}
		}
		else {
			while($donnes = $req->fetch())
			{
					$html .= '<div class="model"><div class="presentation_modele">';
					$html .= '<a href="acceuil.php?id_tailleur=' . $donnes['id'] . '">';
					$html .= '<img src="avatar/'.$donnes['id'].'/'. $donnes["avatar"].'" style="min-width:300px; min-height: 300px; max-width:300px; max-height: 300px;"/>';
					$html .= '<div id="monte">';
					$html .= 'Nom : ' . $donnes["prenom"] . ' ' . $donnes["nom"] . '<br>Complexe : '.$donnes["complexe"].' FCFA <br>Adresse : '.$donnes["adresse"];
					$html .= '</div></a></div>';
                                         $html .= '</div>';
//					$html .='<div class="appreciation">';
//                    $html .= '<div class="aime"><a  href="#">J\'aime</a> <span class="nombre_jaime" style="color:red;">20</span></div>';
//                    $html .= '<div class="non_aime"><a  href="#">J\'aime pas</a><span class="nombre_jaime_pas" style="color:red;"> 5</span></div>';
//                    $html .= '</div></div>';
			}
		}
		
		echo $html;
	}		
}

if (isset($_GET['loveTable']) && isset($_GET['loveId'])) {
	$loveTable = $_GET['loveTable'];
	$loveId = $_GET['loveId'];

	include 'connexion_bd.php';
	global $bdd;

	$req = $bdd->query('SELECT ' . $loveTable . ' FROM modele WHERE id_modele=' . $loveId);
	$res = $req->fetch();
	$nb = $res[$loveTable] + 1;
	$req->closeCursor();
	
	$prepare = $bdd->prepare('
		UPDATE modele SET ' . $loveTable . '=' . $nb . ' WHERE id_modele=:id'
	);

	$prepare->execute(array('id' => $loveId));

	$req = $bdd->query('SELECT ' . $loveTable . ' FROM modele WHERE id_modele=' . $loveId);
	$res = $req->fetch();
	$nb = $res[$loveTable];
	$req->closeCursor();
	echo $nb;
}
/*verification de la combinaison pseudo-mot de passe choisi est disponible*/
if (isset($_POST['pseudo']) && isset($_POST['password'])){
    
    include 'connexion_bd.php';
	global $bdd;
        
       $req=$bdd->prepare('SELECT login,pass FROM tailleur WHERE login = :pseudo AND pass = :password');
    $req->execute(
            array(          
                    'pseudo'=>$_POST['pseudo'],
                    'password'=>$_POST['password']
                        
                )                 
            );

    $resultat=$req->fetch();
    $req->closeCursor();
    if(!$resultat){
        echo 'valide';
    }
    else {
        echo 'non-valide';
    }
}

// RECHERCHE DANS L'ESPACE DU TAILLEUR TAILLEUR
if (isset($_GET['choixTailleur']) && isset($_GET['keywordsTailleur'])) {
	
	$choix = $_GET['choixTailleur'];
	$keywords = $_GET['keywordsTailleur'];
	
	include 'connexion_bd.php';
	global $bdd;
	
	if ($keywords != '') {
		$req = $bdd->prepare('SELECT * FROM modele WHERE ' . $choix . ' LIKE :key AND id_tailleur = :id');
		$req->execute(array(
			'key' => $keywords . '%',
			'id' => $_SESSION['id_tailleur']
		));
	}
	else {
		$req = $bdd->prepare('SELECT * FROM modele WHERE id_tailleur = :id');
		$req->execute(array(
			'id' => $_SESSION['id_tailleur']
		));
	}
		
	$html = '';
	while($donnes = $req->fetch())
	{
		$html .= $donnes['id_modele'] . '|' . $donnes['id_tailleur'] . '|' . $donnes['nom_modele'] . '|' . $donnes['description'] . '|' . $donnes['prix'] . '|' .
				$donnes['avatar_modele'] . '|'. $donnes['aime'] . '|' . $donnes['aime_pas'];
		$html .= '||';
	}
	if ($html != '')
		$html = substr($html, 0, -1);
	echo $html;
}


?>
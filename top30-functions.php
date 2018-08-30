<?php

if(!isset($_GET['id']))
	{
		$models = $bdd->query("SELECT * FROM modele ORDER BY aime DESC LIMIT 3");
	}
	else
	{
		$id = (int) $_GET['id'];

		$models = $bdd->prepare('SELECT * FROM modele,tailleur WHERE id_modele = ?');
		$models->execute(array(
			$id
		));
	}
    if(isset($_GET['id_tailleur']))             //S'il fait une recherche sur un tailleur et click(le resultat) dessus ,on lui affiche les modeles de ce tailleur
	{
		$id_tailleur = (int) $_GET['id_tailleur'];

		$models = $bdd->prepare('SELECT * FROM modele WHERE id_tailleur = ? ');
		$models->execute(array(
			$id_tailleur
		));
	}
?>

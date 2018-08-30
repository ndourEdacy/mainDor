<?php
	include 'connexion_bd.php';
	include 'top30-functions.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Ciseau</title>
        <link rel="stylesheet"  href="main.css"/>
        <link rel="stylesheet"  href="headers.css"/>
	<link rel="stylesheet" href="acceuil.css" />
</head>
<body>
 <!--                 Entete  de    page                  -->
            <?php include 'header1.php';?>
<!--                 Entete  de    page                  -->

<section id="section_acceuil">
    	<div id="modeles">
	<?php
		if(isset($_GET['id']))
		{
			$donnes=$models->fetch();
	?>
			<div class="tailleur">
				<div class="avatar_tailleur"><img src="avatar/<?php echo $donnes['id'] . '/' . $donnes['avatar']?>" style="min-width:250px; min-height:250px;  max-width:250px; max-height:250px; "/></div>
				<p>Prenom : <?php echo $donnes["prenom"]?></p>
				<p>Nom : <?php echo $donnes["nom"]?></p>
				<p>Complexe : <?php echo $donnes["complexe"]?></p>
				<p>Adresse : <?php echo $donnes["adresse"]?></p>
				<p>Téléphone : <?php echo $donnes["telephone"]?></p>
			</div>
			<div class="modele">
				<img src="avatar/<?php echo $donnes['id'] . '/' .$donnes['avatar_modele']?> " style="min-width:400px; min-height:500px;  max-width:400px; max-height:500px; "/>
				<p>Nom : <?php echo $donnes["nom_modele"]?></p>
				<p>Prix : <?php echo $donnes["prix"]?> FCFA</p>
                                <p>Description : <?php echo $donnes["description"]?></p>
			</div>
	<?php
		}
		else
		{
			while($donnes = $models->fetch())
			{
	?>
				<div class="model">
					<div class="presentation_modele">
                                            <a href="acceuil.php?id=<?php echo $donnes["id_modele"]?>">
						<img src="avatar/<?php echo $donnes['id_tailleur'] . '/' .$donnes['avatar_modele']?> " style="min-width:300px; min-height:300px;  max-width:300px; max-height:300px; "/>
						<div id="monte">
							<?php echo 'Modele : '.$donnes["nom_modele"].'<br>Prix : '.$donnes["prix"].' FCFA <br>description : '.$donnes["description"];?>
						</div>
                                             </a>
                                        </div>
                                    <div class="appreciation">
                                        <div class="aime">
											<span style="color: black;">J'aime</span>
											<span class="nombre_jaime" style='color:red;'> <?php echo $donnes["aime"]; ?></span>
										</div>
                                        <div class="non_aime">
											<span style="color: black;">J'aime pas</span>
											<span class="nombre_jaime_pas" style='color:red;'> <?php echo $donnes["aime_pas"]; ?></span>
										</div>
                                    </div>
				</div>
	<?php
			}
		}
	?>
            
	</div>
</section>

 <script  src="defilement.js"  type="text/javascript" ></script>
<script>
var boutton1=document.getElementsByTagName('li');
          boutton1[1].id='active_page';  
</script>

</body>
</html>
<?php

session_start();
include 'connexion_bd.php';
include 'log-member.php';
?>

<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" href="main.css"/> 
         <link rel="stylesheet"  href="headers.css"/>
       
        <title>LA MAIN D'OR</title>
      
    </head>
    <body>
<body>
 <!--                 Entete  de    page                  -->
            <?php include 'header1.php';?>
<!--                 Entete  de    page                  -->
        
        <section>
            <form action="login.php" method="post" id="login_form">
                <div>Connectez-vous</div>
                <label></br>
                    <input type="text" name="identifiant" placeholder="Identifiant" id="identifiant"/>
                </label></br>
                <label></br>
                    <input type="password" name="mot_de_pass" placeholder="Mot de Passe" id="mot_de_pass"/>
                </label></br></br>
                <span style="color:red;"><?php echo (isset($connexion_error)) ? $connexion_error : '';?><span>
                <div style="text-align: center;"><input type="submit" name="connexion" value="Connexion" id="btn_connexion"/> </div></br>
            </form>
        </section>
       
    
    </body>
      <script src="jquery.min.js"></script>
     <script  src="defilement.js"  type="text/javascript" ></script>
     <script  src="login-form-control.js"  type="text/javascript" ></script>


     <script>   
     
                $(function(){
                                     //                                 Masquer la zone de rechercher de la page login
                                    $('#header_form').hide();
                                    //                                 Masquer la zone de rechercher de la page login
                             
                });
                                
                              
     </script>
    
</html>
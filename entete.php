<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
           <script src="jquery.min.js"></script>
           
        <link rel="stylesheet" href="main.css"/> 


        <title>LA MAIN D'OR</title>
      
    </head>
    <body>
        <header>         
              <div id="logo">
                 
                <div class="icone"><img src="icone.jpg"></div>
                <div id="main_dor"><img style="min-width:100%; min-height: 100px; max-width:100%; max-height: 100px;" src="main_dor1.jpg" alt="main_d'or"/></div> 
                 <div class="icone"><img src="icone.jpg"></div>
    
              </div>
             <div id="nav_bar" style="margin-top: 5px;">
                 <div class="ciseau" >
                  <img  style="min-width:100px; min-height: 60px; max-width:100px; max-height: 60px;" src="ciseau.png" alt="ciseau"/>
                 </div>
                 <div id="navigation">
                        <nav>
                            <ul style="border:1px solid black;">
                                <li><a herf="#">Publier</a></li>
                                <li><a href="#">Mes Publications</a></li>
                            </ul>
                            <form id=zoneRecherche  action="#" method="post" > 
                                     <select name="trier" id=trier>
                                             <option value=" ">Rechercher par :</option>
                                             <option value="nom">nom</option>
                                             <option value="adresse ">adresse </option>
                                             <option value="prix">prix</option>
                                             <option value="modele">modele</option>
                                     </select>     
                                      <input type="text" name="recherche" id='recherche' placeholder="recherche" size="30"  />
                                      <input type="submit" name="rechercher" id="rechercher" value="Rechercher"/>
                             </form>
                            <div id="lien_connexion" >
                                <a href="login.php" title="Connectez-vous"><img src="log.png" title="Connectez-vous" alt="connexion"/></a>
                             </div>
                        </nav>
                      
                 </div>
                 <div class="ciseau" >
                  <img  style="min-width:100px; min-height: 60px; max-width:100px; max-height: 60px;"src="ciseau.png" alt="ciseau"/>
                 </div>

             </div>
             

            
        </header>
       
    
    </body>
    
   

    
</html>

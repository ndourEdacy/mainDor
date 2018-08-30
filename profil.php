<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      
                 <link rel="stylesheet" href="profil.css"/> 

        
        <title>LA MAIN D'OR</title>
      
    </head>
    <body>
        <header>
            <div id="logo"  >
               <img class="fond" style="min-width:100%; min-height: 150px; max-width:100%; max-height: 300px;" src="main_dor2.png" alt="main_d'or"/>
               <img class="fond" style="min-width:100%; min-height: 180px; max-width:100%; max-height: 320px;" src="main_dor1.jpg" alt="main_d'or"/>
            </div>
            <div id="entete_droite">
          
                 <div id="nav_bar" >
                         <div id="navigation">
                               <nav>
                                   <ul >
                                       <li><a herf="#">PUBLIER</a></li>
                                       <li><a href="#">MES MODELES</a></li>
                                       <li><a href="#">MES FAVORIS</a></li>
                                   </ul>                           
                               </nav>

                        </div>
                 </div>
                 <div id="header_form" >
               
                      <form id="zoneRecherche"  action="#" method="post" > 
                        <select id="liste_recherche" name="recherche_par">
				<option value="nom_modele-modele">Nom du modéle<option>
				<option value="prix-modele">Prix du modèle<option>
				<option value="complexe-tailleur">Nom du complexe ou atelier de couture<option>
				<option value="adresse-tailleur">Adresse du complexe ou atelier de couture<option>	
			</select> 
                        <input type="search" id="recherche" name="recherche" placeholder="Recherche" size="30" >
                    </form> 
                    <div id="lock"> <a href="login.php" title="Connectez-vous"><img src="lock.png" title="Connectez-vous" alt="connexion"/></a></div>                  
             </div>
          </div>
           
                     
  <span id="ciseau"><img  src="ciseau.png" alt="ciseau" style="min-width:200px; min-height: 500px; max-width:300px; max-height: 1000px;"/></span> 
            
        </header>
       
        <section>
           
            
        </section>
       
    
        
        
        
         <script src="jquery.min.js"></script>
     <script>   
      //Animation menu
                                $(function(){
                                
                                 function deplace_1(){
                                          $('.fond').last().animate({'top':'110'},2000,function(){
                                                    $('.fond').first().animate({'bottom':'110'},'2000',function(){
                                                            
                                                            $('.fond').animate({'top':'0'},2000);
                                                            $('.fond').last().fadeTo(4000,0.5).fadeTo(2000,1).delay(3000).fadeOut('slow','linear',function(){
                                                                $('.fond').first().fadeOut(2000,'linear').fadeIn(2000,'linear').delay(1000).next().fadeIn(2000,'linear');
                                                                
                                                             
                                                            });
                                                    });    
                                                                            
                                          });
                                   }  
                               /*    function fondu(){
                                        
                                        $('.fond').last().fadeTo(4000,0.5).fadeTo(2000,1).delay(3000).fadeOut('slow','linear',function(){
                                            $('.fond').first().fadeOut(2000,'linear');
                                        });
                                   }  */
                                 deplace_1(); 
                                // fondu();
                                
                                });
                                
      
     </script>
    </body>
    
  
    
    
</html>
  <header>
           <div id="logo"  ><img class="fond" style="min-width:100%; min-height: 150px; max-width:100%; max-height: 150px;" src="main_dor1.jpg" alt="main_d'or"/></div>
            <div id="entete_droite">
          
                 <div id="nav_bar" >
                         <div id="navigation">
                               <nav>
                                   <ul >
                                       <li><a href="publication.php">MES MODELES</a></li>
                                       <li><a href="favoris.php">MES FAVORIS</a></li>
                                       <li><a href="upload.php">PUBLIER</a></li>
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
                    <div id="lock">
                        <img src="setting_ico2.png" title="Parametres" alt="Parametres"/>
                        <div id="lien_deconnexion">
                                <img src="nav_arrow.png" style="display: inline-block;" />
                                <ul id="menu_disconnect">
                                    <li><a href="logout.php">Deconnexion</a></li>
                                    <li><a href="setting.php">Parametres</a></li>
                                </ul>
                         </div>                       
                    </div>                  
             </div>
          </div>      
        </header>
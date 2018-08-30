$(function(){
    
                     $('.indiquation').css('display','none');
                                    
                                    $('input').keyup(function(){
                                        if($(this).attr('id')==='prenom' || $(this).attr('id')==='nom'){
                                            
                                            
                                          
                                                    var contenue=$(this).val();
                                                    var id_indiquateur='indiquation_'+$(this).attr('id');
                                                                                           //VERIFICATION DE LA SYNTHAXE ET DE LA LONGUEUR DU CONTENUE 
                                                      if(contenue==='')                               /*Verifier si le champs est vide   */
                                                      {
                                                             var element=document.getElementById(id_indiquateur);
                                                              if(element){
                                                                          element.remove();
                                                              }
                                                            $('<span class="indiquation" id="'+id_indiquateur+'">Veillez indiquer ce champ</span>').insertAfter($(this));
                                                            $(this).css('border','1px solid red');
                                                      }
                                                      else                                          /* Utlisation des Regex pour controler le longueur et le contenu */
                                                      {
                                                            if(/^[a-zéèçàùëöäïÿêîÔÂ ?]{1}$/i.test(contenue))              
                                                            {
                                                                     var element=document.getElementById(id_indiquateur);
                                                                      if(element){
                                                                               element.remove();
                                                                      }  
                                                                    $('<span class="indiquation" id="'+id_indiquateur+'">Trop court</span>').insertAfter($(this));
                                                                    $(this).css('border','1px solid red');
                                                            }
                                                            else{
                                                                    if(/^(?: ?[a-zéèçàùëöäïÿêîÔÂ])(?:[a-zéèçàùëöäïÿêîÔÂ ?\-? ?'?])*(?:[a-zéèçàùëöäïÿêîÔÂ]+ *)$/i.test(contenue)) /*Commence par #alphabet ou espace# se termine par #espace ou alphabet+espace# */
                                                                    {        
                                                                                if(/\- *\-|' *'/i.test(contenue))           /*VERIFIER S'IL Y'A PLUSIEURS TIRETS(-) QUI SE SUIVENT  */
                                                                                {
                                                                                    
                                                                                    var element=document.getElementById(id_indiquateur);
                                                                                    if(element){
                                                                                         element.remove();
                                                                                    }
                                                                                    $('<span class="indiquation" id="'+id_indiquateur+'">Syntaxe incorrecte</span>').insertAfter($(this)); 
                                                                                   $(this).css('border','1px solid red');
                                                                                }
                                                                                else{
                                                                                    var element=document.getElementById(id_indiquateur);
                                                                                    if(element){
                                                                                             element.remove();
                                                                                    } 
                                                                                   $(this).css('border','1px solid rgba(64,0,64,0.5)');
                                                                                }                                                                        
                                                                    }
                                                                    else
                                                                    {
                                                                                   var element=document.getElementById(id_indiquateur);
                                                                                    if(element){
                                                                                         element.remove();
                                                                                    }
                                                                                
                                                                                  $('<span class="indiquation" id="'+id_indiquateur+'">Un mauvais caractere a ete introduit</span>').insertAfter($(this));
                                                                                    $(this).css('border','1px solid red');
                                                                                                                       
                                                                                  
//                                                                                 alert(element.textContent);
                                                                                
                                                                    }
                                                            }
                                                      }  
              
                                            
                                        }
                                        if($(this).attr('id')==='complexe' || $(this).attr('id')==='adresse'){
                                                var contenue=$(this).val();
                                                var id_indiquateur='indiquation_'+$(this).attr('id');
                                            
                                                if(contenue==='')  
                                                {
                                                         var element=document.getElementById(id_indiquateur);
                                                              if(element){
                                                                          element.remove();
                                                              }
                                                            $('<span class="indiquation" id="'+id_indiquateur+'">Veillez indiquer ce champ</span>').insertAfter($(this));
                                                            $(this).css('border','1px solid red');
                                                }
                                                else
                                                {
                                                      if(/^[a-zéèçàùëöäïÿêîÔÂ ?]{1}$/i.test(contenue))  
                                                      {
                                                                  var element=document.getElementById(id_indiquateur);
                                                                      if(element){
                                                                               element.remove();
                                                                      }  
                                                                    $('<span class="indiquation" id="'+id_indiquateur+'">Trop court</span>').insertAfter($(this));   
                                                                    $(this).css('border','1px solid red');
                                                      }
                                                      else{
                                                              if(/^(?: ?[a-zéèçàùëöäïÿêîÔÂ])(?:[a-zéèçàùëöäïÿêîÔÂ]*|[0-9]*|[ ?\-?'?])*(?:[a-zéèçàùëöäïÿêîÔÂ0-9]+ *)$/i.test(contenue)) 
                                                              {
                                                                          if(/\- *\-|' *'/i.test(contenue))
                                                                          {
                                                                             var element=document.getElementById(id_indiquateur);
                                                                                    if(element){
                                                                                         element.remove();
                                                                                    }
                                                                                    $('<span class="indiquation" id="'+id_indiquateur+'">Syntaxe incorrecte</span>').insertAfter($(this)); 
                                                                                    $(this).css('border','1px solid red');
                                                                          }
                                                                          else
                                                                          {
                                                                             var element=document.getElementById(id_indiquateur);
                                                                                    if(element){
                                                                                             element.remove();
                                                                                    } 
                                                                                      $(this).css('border','1px solid rgba(64,0,64,0.5)');
                                                                          }
                                                              }
                                                              else
                                                              {
                                                                  var element=document.getElementById(id_indiquateur);
                                                                                    if(element){
                                                                                         element.remove();
                                                                                    }
                                                                                
                                                                                  $('<span class="indiquation" id="'+id_indiquateur+'">Un mauvais caractere a ete introduit</span>').insertAfter($(this));
                                                                                  $(this).css('border','1px solid red');
                                                              }
                                                      }
                                                }
                                        }
                                        if($(this).attr('id')==='telephone'){
                                                
                                                var contenue=$(this).val();
                                                var id_indiquateur='indiquation_'+$(this).attr('id');
                                                 if(contenue==='')  
                                                {
                                                            var element=document.getElementById(id_indiquateur);
                                                              if(element){
                                                                          element.remove();
                                                              }
                                                            $('<span class="indiquation" id="'+id_indiquateur+'">Veillez indiquer ce champ</span>').insertAfter($(this));
                                                            $(this).css('border','1px solid red');
                                                }
                                                else
                                                {
                                                      if(/^ *(?:70)|(?:33)|(?:77)|(?:78)|(?:76)$/i.test(contenue))                    
                                                      {
                                                                                                                          
                                                                      if(/^ *(?:70\d*\D+)|(?:33\d*\D+)|(?:77\d*\D+)|(?:78\d*\D+)|(?:76\d*\D+) *$/i.test(contenue)) {
                                                                          var element=document.getElementById(id_indiquateur);
                                                                                if(element){
                                                                                            element.remove();
                                                                                }
                                                                              $('<span class="indiquation" id="'+id_indiquateur+'">Presence d\'un caractere non autorise</span>').insertAfter($(this));
                                                                              $(this).css('border','1px solid red');
                                                                      }
                                                                      else{
                                                                         
                                                                                  if(contenue.length<9){
                                                                                  var element=document.getElementById(id_indiquateur);
                                                                                    if(element){
                                                                                                element.remove();
                                                                                    }
                                                                                  $('<span class="indiquation" id="'+id_indiquateur+'">Numero trop court</span>').insertAfter($(this));
                                                                                  $(this).css('border','1px solid red');
                                                                          }
                                                                          else if(contenue.length>9){
                                                                              var element=document.getElementById(id_indiquateur);
                                                                                    if(element){
                                                                                                element.remove();
                                                                                    }
                                                                                  $('<span class="indiquation" id="'+id_indiquateur+'">Numero trop long:Attention aux espaces</span>').insertAfter($(this));
                                                                                  $(this).css('border','1px solid red');
                                                                          }
                                                                          else{
                                                                              var element=document.getElementById(id_indiquateur);
                                                                                    if(element){
                                                                                                element.remove();
                                                                                    }
                                                                                 
                                                                                  $(this).css('border','1px solid rgba(64,0,64,0.5)');
                                                                          }
                                                                     
                                                                      }
                                                                                                                                                                
                                                                   
                                                      }else{
                                                            
                                                             var element=document.getElementById(id_indiquateur);
                                                                        if(element){
                                                                                    element.remove();
                                                                        }
                                                                      $('<span class="indiquation" id="'+id_indiquateur+'">Indicatif inconnu</span>').insertAfter($(this));
                                                                      $(this).css('border','1px solid red');
                                                      }
                                                     
                                                }
                                        }
                                         
                                            
                                     
                                    });
});

  //POUR TESTER QUE TOUT LE CHAMPS DU FORMULAIRE PROFIL SONT BIEN REMPLIS
                                         var formulaire_profil=document.getElementById('formulaire_profil');
                
                                                           
               
                                           formulaire_profil.onsubmit= function() {
                                                    
                                                    var inputs=formulaire_profil.getElementsByTagName('input');
                                                     for(var i=0,c=inputs.length;i<c;i++){
                                                        if(inputs[i].type ==='text' && inputs[i].value===''){
                                                            if(inputs[i].parentNode.lastChild.className==='indiquation'){  //Supprimer l'indiquation actuelle
                                                                inputs[i].parentNode.removeChild(inputs[i].parentNode.lastChild);
                                                            }
                                                            var spans=document.createElement('span');
                                                            spans.className='indiquation';
                                                            spans.id='indiquation_'+inputs[i].id;
                                                            spans.textContent='Veillez indiquer ce champ';
                                                           inputs[i].parentNode.appendChild(spans);
                                                                                                                    
                                                       }
                                                    }  
                                                    var indi=formulaire_profil.getElementsByClassName('indiquation');
                                                    if(indi.length>0){
                                                       
                                                        return false;
                                                    }
                                            };

$(function(){
    
                     $('.indiquation').css('display','none');
                                    
                                    $('input').keyup(function(){
                                        if($(this).attr('id')==='identifiant'){
                                            
                                                                                  
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
                                                           $(this).css('border','none').css('border-bottom','1px solid red');
                                                      }
                                                      else                                         
                                                      {
                                                            if(/^[a-z]{1}$/i.test(contenue))              
                                                            {
                                                                     var element=document.getElementById(id_indiquateur);
                                                                      if(element){
                                                                               element.remove();
                                                                      }  
                                                                    $('<span class="indiquation" id="'+id_indiquateur+'">Trop court</span>').insertAfter($(this));
                                                                    $(this).css('border','none').css('border-bottom','1px solid red');
                                                            }
                                                            else{
                                                                    if(/^(?:[a-z])(?:[a-z]*|[0-9]*|[\.?\-?])*(?:[a-z]|[0-9])$/i.test(contenue)) 
                                                                    {        
                                                                                if(/\-\-|\.\.|\-\.|\.\-/i.test(contenue))           /*VERIFIER S'IL Y'A PLUSIEURS TIRETS(-) QUI SE SUIVENT  */
                                                                                {
                                                                                    
                                                                                    var element=document.getElementById(id_indiquateur);
                                                                                    if(element){
                                                                                         element.remove();
                                                                                    }
                                                                                    $('<span class="indiquation" id="'+id_indiquateur+'">Syntaxe incorrecte</span>').insertAfter($(this)); 
                                                                                     $(this).css('border','none').css('border-bottom','1px solid red');
                                                                                }
                                                                                else{
                                                                                    
                                                                                   if(contenue.length<6){
                                                                                          var element=document.getElementById(id_indiquateur);
                                                                                            if(element){
                                                                                                     element.remove();
                                                                                            } 
                                                                                            $('<span class="indiquation" id="'+id_indiquateur+'">Trop court</span>').insertAfter($(this));
                                                                                          $(this).css('border','none').css('border-bottom','1px solid red');
                                                                                    }
                                                                                    else{ 
                                                                                        var element=document.getElementById(id_indiquateur);
                                                                                        if(element){
                                                                                                 element.remove();
                                                                                        } 
                                                                                       $(this).css('border','none').css('border-bottom','1px solid rgb(173,78,173)');
                                                                                        
                                                                                        
                                                                                    }
                                                                                   
                                                                                }                                                                        
                                                                    }
                                                                    else
                                                                    {
                                                                                   var element=document.getElementById(id_indiquateur);
                                                                                    if(element){
                                                                                         element.remove();
                                                                                    }
                                                                                
                                                                                  $('<span class="indiquation" id="'+id_indiquateur+'">Un mauvais caractere a ete introduit</span>').insertAfter($(this));
                                                                                   $(this).css('border-bottom','1px solid red');
                                                                                                                                                                                                       
                                                                    }
                                                            }
                                                      }  
              
                                            
                                        }
                                        if($(this).attr('id')==='mot_de_pass'){
                                            
                                                                                  
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
                                                           $(this).css('border','none').css('border-bottom','1px solid red');
                                                      }
                                                      else                                         
                                                      {
                                                            if(/^(?:[a-z]|[0-9]){1}$/i.test(contenue))              
                                                            {
                                                                     var element=document.getElementById(id_indiquateur);
                                                                      if(element){
                                                                               element.remove();
                                                                      }  
                                                                    $('<span class="indiquation" id="'+id_indiquateur+'">Trop court</span>').insertAfter($(this));
                                                                    $(this).css('border','none').css('border-bottom','1px solid red');
                                                            }
                                                            else{
                                                                    if(/^(?:[a-z]|[0-9])(?:[a-z]*|[0-9]*|[\.?\-?])*(?:[a-z]|[0-9])$/i.test(contenue)) 
                                                                    {        
                                                                                if(/\-\-|\.\.|\-\.|\.\-/i.test(contenue))           /*VERIFIER S'IL Y'A PLUSIEURS TIRETS(-) QUI SE SUIVENT  */
                                                                                {
                                                                                    
                                                                                    var element=document.getElementById(id_indiquateur);
                                                                                    if(element){
                                                                                         element.remove();
                                                                                    }
                                                                                    $('<span class="indiquation" id="'+id_indiquateur+'">Syntaxe incorrecte</span>').insertAfter($(this)); 
                                                                                     $(this).css('border','none').css('border-bottom','1px solid red');
                                                                                }
                                                                                else{
                                                                                    
                                                                                   if(contenue.length<6){
                                                                                          var element=document.getElementById(id_indiquateur);
                                                                                            if(element){
                                                                                                     element.remove();
                                                                                            } 
                                                                                            $('<span class="indiquation" id="'+id_indiquateur+'">Trop court</span>').insertAfter($(this));
                                                                                          $(this).css('border','none').css('border-bottom','1px solid red');
                                                                                    }
                                                                                    else{ 
                                                                                        var element=document.getElementById(id_indiquateur);
                                                                                        if(element){
                                                                                                 element.remove();
                                                                                        } 
                                                                                       $(this).css('border','none').css('border-bottom','1px solid rgb(173,78,173)');
                                                                                        
                                                                                        
                                                                                    }
                                                                                   
                                                                                }                                                                        
                                                                    }
                                                                    else
                                                                    {
                                                                                   var element=document.getElementById(id_indiquateur);
                                                                                    if(element){
                                                                                         element.remove();
                                                                                    }
                                                                                
                                                                                  $('<span class="indiquation" id="'+id_indiquateur+'">Un mauvais caractere a ete introduit</span>').insertAfter($(this));
                                                                                   $(this).css('border-bottom','1px solid red');
                                                                                                                       
                                                                                  
                                                                                
                                                                    }
                                                            }
                                                      }  
              
                                            
                                        }
                                       
                                          
                                     
                                    });
});

   //POUR TESTER QUE TOUT LE CHAMPS DU FORMULAIRE PROFIL SONT BIEN REMPLIS
                                         var login_form=document.getElementById('login_form');
                
                                                           
               
                                           login_form.onsubmit= function() {
                                              //      alert('ok');
                                                    var inputs=login_form.getElementsByTagName('input');
                                                     for(var i=0,c=inputs.length;i<c;i++){
                                                        if((inputs[i].type ==='text' || inputs[i].type ==='password' ) && inputs[i].value===''){
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
                                                    var indi=login_form.getElementsByClassName('indiquation');
                                                    if(indi.length>0){
                                                       
                                                        return false;
                                                    }
                                            };
                                            


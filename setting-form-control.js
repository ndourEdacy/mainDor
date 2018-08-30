$(function(){
    
                       
                                    
                                 /*   controles de saisie   */
                                 
                                              $('.indiquation').css('display','none');
                                    
                                    $('input').keyup(function(){
                                        if($(this).attr('id')==='pseudo'){
                                            
                                                                                  
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
                                                      else                                         
                                                      {
                                                            if(/^[a-z]{1}$/i.test(contenue))              
                                                            {
                                                                     var element=document.getElementById(id_indiquateur);
                                                                      if(element){
                                                                               element.remove();
                                                                      }  
                                                                    $('<span class="indiquation" id="'+id_indiquateur+'">Trop court</span>').insertAfter($(this));
                                                                    $(this).css('border','1px solid red');
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
                                                                                     $(this).css('border','1px solid red');
                                                                                }
                                                                                else{
                                                                                    
                                                                                   if(contenue.length<6){
                                                                                          var element=document.getElementById(id_indiquateur);
                                                                                            if(element){
                                                                                                     element.remove();
                                                                                            } 
                                                                                            $('<span class="indiquation" id="'+id_indiquateur+'">Trop court</span>').insertAfter($(this));
                                                                                          $(this).css('border','1px solid red');
                                                                                    }
                                                                                    else{ 
                                                                                        var element=document.getElementById(id_indiquateur);
                                                                                        if(element){
                                                                                                 element.remove();
                                                                                        } 
                                                                                       $(this).css('border','1px solid rgb(173,78,173)');
                                                                                        
                                                                                        
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
                                                                                   $(this).css('border','1px solid red');
                                                                                                                       
                                                                                  
//                                                                                 alert(element.textContent);
                                                                                
                                                                    }
                                                            }
                                                      }  
              
                                            
                                        }
                                        if($(this).attr('id')==='new_mdp' || $(this).attr('id')==='new_mdp_conf' || $(this).attr('id')==='mdp_actuel'){
                                            
                                                                                  
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
                                                      else                                         
                                                      {
                                                            if(/^(?:[a-z]|[0-9]){1}$/i.test(contenue))              
                                                            {
                                                                     var element=document.getElementById(id_indiquateur);
                                                                      if(element){
                                                                               element.remove();
                                                                      }  
                                                                    $('<span class="indiquation" id="'+id_indiquateur+'">Trop court</span>').insertAfter($(this));
                                                                    $(this).css('border','1px solid red');
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
                                                                                     $(this).css('border','1px solid red');
                                                                                }
                                                                                else{
                                                                                    
                                                                                   if(contenue.length<6){
                                                                                          var element=document.getElementById(id_indiquateur);
                                                                                            if(element){
                                                                                                     element.remove();
                                                                                            } 
                                                                                            $('<span class="indiquation" id="'+id_indiquateur+'">Trop court</span>').insertAfter($(this));
                                                                                          $(this).css('border','1px solid red');
                                                                                    }
                                                                                    else{
                                                                                        
                                                                                   /*CONTROLE DE LA CORRESPONDANCE DES DEUX MOTS DE PASSE ET DE LA VALIDITE DU COMBINAISON */
                                                                    /*==========================================================================================*/
                                                                                            if($(this).attr('id')==='new_mdp')
                                                                                            {
                                                                                                if($('#new_mdp_conf').val().length>=6 )
                                                                                                {
                                                                                                    if($(this).val()!==$('#new_mdp_conf').val())  //Non correspondance des deux mots de pass
                                                                                                    {
                                                                                                          if($('#indiquation_new_mdp'))
                                                                                                        {
                                                                                                            $('#indiquation_new_mdp').remove();  
                                                                                                        }       
                                                                                                        $('<span class="indiquation" id="'+id_indiquateur+'">Les mots de passe ne correspondent pas</span>').insertAfter($(this));
                                                                                                        $(this).css('border','1px solid red');
                                                                                                    }
                                                                                                    else                                                //Si correspondance alors
                                                                                                    {
                                                                                                       $.post('ajax-search.php',{pseudo:$('#pseudo').val(),password:$('#new_mdp').val()},   //Controle de la validite de la combinaison pseudo-mot de passe
                                                                                                       function(data){
                                                                                                                
                                                                                                                if(data==="valide"){                          //
                                                                                                                        if($('#indiquation_new_mdp'))
                                                                                                                        {
                                                                                                            
                                                                                                                             $('#indiquation_new_mdp').remove(); 
                                                                                                                            $('#new_mdp').css('border','1px solid rgb(173,78,173)');
                                                                                                                            if($('#indiquation_new_mdp_conf'))
                                                                                                                            {
                                                                                                                                 $('#indiquation_new_mdp_conf').remove(); 
                                                                                                                                 $('#new_mdp_conf').css('border','1px solid rgb(173,78,173)');
                                                                                                                            }   
                                                                                                                        } 
                                                                                                                }
                                                                                                                else
                                                                                                                {
                                                                                                                         if($('#indiquation_new_mdp'))
                                                                                                                        {   
                                                                                                                             $('#indiquation_new_mdp').remove();
                                                                                                                             if($('#indiquation_new_mdp_conf'))
                                                                                                                              {    
                                                                                                                                     $('#indiquation_new_mdp_conf').remove(); 
                                                                                                                                     $('#new_mdp_conf').css('border','1px solid rgb(173,78,173)');
                                                                                                                              }
                                                                                                                        }
                                                                                                                        $('<span class="indiquation" id="'+id_indiquateur+'">Combinaison invalide</span>').insertAfter($('#new_mdp'));
                                                                                                                        $('#new_mdp').css('border','1px solid red');
                                                                                                                }
                                                                                                                
                                                                                                       });   
                                                                                                    }
                                                                                                }
                                                                                                else
                                                                                                {
                                                                                                    if($('#indiquation_new_mdp'))
                                                                                                    {
                                                                                                       $('#indiquation_new_mdp').remove(); 
                                                                                                        $(this).css('border','1px solid rgb(173,78,173)');
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                            /*==========================================================================================*/
                                                                                            if($(this).attr('id')==='new_mdp_conf')
                                                                                            {
                                                                                                if($('#new_mdp').val().length>=6)
                                                                                                {
                                                                                                   if($(this).val()!==$('#new_mdp').val())    //Non correspondance des deux mots de pass
                                                                                                   {
                                                                                                         if($('#indiquation_new_mdp_conf'))
                                                                                                        {
                                                                                                            $('#indiquation_new_mdp_conf').remove();    
                                                                                                        }       
                                                                                                        $('<span class="indiquation" id="'+id_indiquateur+'">Les mots de passe ne correspondent pas</span>').insertAfter($(this));
                                                                                                        $(this).css('border','1px solid red');
                                                                                                   }
                                                                                                   else                                                 //Si correspondance alors
                                                                                                    {  
                                                                                                       $.post('ajax-search.php',{pseudo:$('#pseudo').val(),password:$('#new_mdp').val()},            //Controle de la validite de la combinaison pseudo-mot de passe
                                                                                                       function(data){
                                                                                                                
                                                                                                                if(data==="valide"){
                                                                                                                        if($('#indiquation_new_mdp_conf'))
                                                                                                                        {
                                                                                                                             $('#indiquation_new_mdp_conf').remove(); 
                                                                                                                            $('#new_mdp_conf').css('border','1px solid rgb(173,78,173)');
                                                                                                                            if($('#indiquation_new_mdp'))
                                                                                                                            {
                                                                                                                                 $('#indiquation_new_mdp').remove(); 
                                                                                                                                 $('#new_mdp').css('border','1px solid rgb(173,78,173)');
                                                                                                                            }   
                                                                                                                        } 
                                                                                                                }
                                                                                                                else
                                                                                                                {
                                                                                                                         if($('#indiquation_new_mdp_conf'))
                                                                                                                        {    
                                                                                                                             $('#indiquation_new_mdp_conf').remove(); 
                                                                                                                              if($('#indiquation_new_mdp'))
                                                                                                                              {    
                                                                                                                                     $('#indiquation_new_mdp').remove(); 
                                                                                                                                     $('#new_mdp').css('border','1px solid rgb(173,78,173)');
                                                                                                                              }
                                                                                                                        }
                                                                                                                        $('<span class="indiquation" id="'+id_indiquateur+'">Combinaison invalide</span>').insertAfter($('#new_mdp_conf'));
                                                                                                                        $('#new_mdp_conf').css('border','1px solid red');
                                                                                                                }
                                                                                                                
                                                                                                       });
                                                                                                       
                                                                                                    }
                                                                                                }
                                                                                                else
                                                                                                {
                                                                                                    if($('#indiquation_new_mdp_conf'))
                                                                                                    {
                                                                                                      
                                                                                                       $('#indiquation_new_mdp_conf').remove(); 
                                                                                                       $(this).css('border','1px solid rgb(173,78,173)');
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                               /*==========================================================================================*/
                                                                                            if($(this).attr('id')==='mdp_actuel')
                                                                                            {
                                                                                                if($('#indiquation_mdp_actuel'))
                                                                                                    {
                                                                                                      
                                                                                                       $('#indiquation_mdp_actuel').remove(); 
                                                                                                       $(this).css('border','1px solid rgb(173,78,173)');
                                                                                                    }
                                                                                            }
                                                                                            
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
                                                                                   $(this).css('border','1px solid red');
                                                                                                                       
                                                                                  
                                                                                
                                                                    }
                                                            }
                                                      }  
              
                                            
                                        }
                                       
                                          
                                     
                                    });
});

 //POUR TESTER QUE TOUT LE CHAMPS DU FORMULAIRE PROFIL SONT BIEN REMPLIS
                                         var setting_form=document.getElementById('formulaire_parametre');
                
                                                           
               
                                           setting_form.onsubmit= function() {
                                              //      alert('ok');
                                                    var inputs=setting_form.getElementsByTagName('input');
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
                                                    var indi=setting_form.getElementsByClassName('indiquation');
                                                    if(indi.length>0){
                                                       
                                                        return false;
                                                    }
                                            };
                                            
                

  //Controles de saisie
 $(function(){
                                
                                   $('.indiquation').css('display','none');
                                    
                                    $('input').keyup(function(){
                             
                                        if($(this).attr('class')==='nom_modele' ){
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
                                        if($(this).attr('class')==='prix'){
                                                
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
                                                      if(/^(?: *[0-9]){1}$/i.test(contenue))                     /*Verification de l'intervalle [15-70]*/
                                                      {
                                                               var element=document.getElementById(id_indiquateur);
                                                              if(element){
                                                                          element.remove();
                                                              }
                                                            $('<span class="indiquation" id="'+id_indiquateur+'">Valeur faible</span>').insertAfter($(this));
                                                            $(this).css('border','1px solid red');
                                                                   
                                                      }
                                                      else{
                                                              if(/^(?: *[0-9]){2,} *$/i.test(contenue))            /*Verification de l'intervalle [15-70]*/
                                                              {   
                                                                          if(parseInt(contenue)<=0)  
                                                                          {
                                                                              var element=document.getElementById(id_indiquateur);
                                                                                if(element){
                                                                                            element.remove();
                                                                                }
                                                                              $('<span class="indiquation" id="'+id_indiquateur+'">Valeur faible</span>').insertAfter($(this));
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
        
                                            
                                     
                                    });
});

                 
                                             //POUR TESTER QUE TOUT LE CHAMPS  DU FORMULAIRE MODIFICATION SONT BIEN REMPLIS
                                                     
  function verifier(element){    //Verifier le formulaire de modification a l'envoi
                                 
          var indi=element.getElementsByClassName('indiquation'); 
                                  
          if(indi.length>0){
                                                
                      return indi.length;
          }
          return 0;
                                  
  }

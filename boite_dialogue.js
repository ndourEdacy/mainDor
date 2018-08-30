
/*                             gestion des boites dialogue                       */  
function voir_formulaire(element){
       
       fermer_formulaire()();               //FERMERLA BOITE DEJA OUVERTE
       
      var detail=element.parentNode.firstChild;
     
      
      detail.style.display='block';
         
    }
   

function fermer_formulaire(){
        
alert('ok');
        var detail=document.getElementsByClassName('overlay');
        for(var i=0,c=detail.length;i<c;i++){
            
            detail[i].style.display='none';
        }
        
 }
                  
 
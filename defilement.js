
(function(){
   
        var count=1;
	var total=4;
	function slide(x){
				
		var image=document.getElementById('logo');
                var img=image.firstChild;
                
		count+=x;
		if(count>total){
                    count=1;
                }
		if(count<1){
                    count=total;
                }
                
            img.src='main_dor'+count+'.jpg';
            setTimeout(slide,10000,x);
				
	}
        slide(1);    
})();  

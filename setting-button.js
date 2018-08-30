$(function(){
 
    //                                    Buotton parametre de la page
                                            
                                             $('#lien_deconnexion').hide(); 
                                            $('#lock').hover(function(){
                                                $('#lock img:first').attr('src','setting_ico.png');
                                                $('#lien_deconnexion').show('slow','linear');
                                            },function(){
                                                $('#lock img:first').attr('src','setting_ico2.png');
                                               $('#lien_deconnexion').hide('slow','linear');
                                            });
                                                                                       
                                    //                                    Buotton parametre de la page
});



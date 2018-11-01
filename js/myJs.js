//on gère l'effet cacher et montrer des blocs responsable, fonction, etablissement, classe, enseignement et groupe ...
//on remplace l'icone en fonction de l'état du bloc s'il est caché ou visible
$(function(){
    $("#responsable").click(function(){
        if($("#responsable i").text() == "keyboard_arrow_right"){
            $("#responsable i").text("keyboard_arrow_down")
        }else{
            $("#responsable i").text("keyboard_arrow_right")
        }
        $("#bloc-responsable").toggle('fold');
    })
    
    $("#fonction").click(function(){
        if($("#fonction i").text() == "keyboard_arrow_right"){
            $("#fonction i").text("keyboard_arrow_down")
        }else{
            $("#fonction i").text("keyboard_arrow_right")
        }
        $("#bloc-fonction").toggle('fold');
    })
    
    $("#etablissement").click(function(){
        if($("#etablissement i").text() == "keyboard_arrow_right"){
            $("#etablissement i").text("keyboard_arrow_down")
        }else{
            $("#etablissement i").text("keyboard_arrow_right")
        }
        $("#bloc-etablissement").toggle('fold');
    })
    
    $("#classe").click(function(){
        if($("#classe i").text() == "keyboard_arrow_right"){
            $("#classe i").text("keyboard_arrow_down")
        }else{
            $("#classe i").text("keyboard_arrow_right")
        }
        $("#bloc-classe").toggle('fold');
    })
    
    $("#enseignement").click(function(){
        if($("#enseignement i").text() == "keyboard_arrow_right"){
            $("#enseignement i").text("keyboard_arrow_down")
        }else{
            $("#enseignement i").text("keyboard_arrow_right")
        }
        $("#bloc-enseignement").toggle('fold');
    })
    
    $("#group").click(function(){
        if($("#group i").text() == "keyboard_arrow_right"){
            $("#group i").text("keyboard_arrow_down")
        }else{
            $("#group i").text("keyboard_arrow_right")
        }
        $("#bloc-group").toggle('fold');
    })
})
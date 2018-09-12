$(document).ready(function(){
   $(".cont-left").load("contleft.html"); 
   $(".cont-middle").load("contmiddle.html");
   $(".cont-right").load("contright.html");  
});

$(document).ready(function(){
    $(".open-left").click(function(){
        $(".mob-left").css("left","50%");
    })
})

$(document).ready(function(){
    $(".close-left").click(function(){
        $(".mob-left").css("left","-50%");
    })
})

$(document).ready(function(){
    $(".open-right").click(function(){
        $(".mob-right").css("right","-50%");
        
    })
})

$(document).ready(function(){
    $(".close-right").click(function(){
        $(".mob-right").css("right","-150%");
    })
})
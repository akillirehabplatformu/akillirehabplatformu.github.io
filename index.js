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


$(document).ready(function(){
    $(".mob-today-div-opener").click(function(){
        $(".mob-light-div").css("display","none");
        $(".mob-categories-div").css("display","none");
        $(".mob-light-div-opener").css("color","white");
        $(".mob-categories-div-opener").css("color","white");
        
        $(".mob-today-div").css("display","block");
        $(".mob-today-div-opener").css("color","orange");
    })
})

$(document).ready(function(){
    $(".mob-light-div-opener").click(function(){
        $(".mob-today-div").css("display","none");
        $(".mob-categories-div").css("display","none");
        $(".mob-today-div-opener").css("color","white");
        $(".mob-categories-div-opener").css("color","white");
        
        $(".mob-light-div").css("display","block");
        $(".mob-light-div-opener").css("color","orange");
    })
})

$(document).ready(function(){
    $(".mob-categories-div-opener").click(function(){
        $(".mob-today-div").css("display","none");
        $(".mob-light-div").css("display","none");
        $(".mob-today-div-opener").css("color","white");
        $(".mob-light-div-opener").css("color","white");
        
        $(".mob-categories-div").css("display","block");
        $(".mob-categories-div-opener").css("color","orange");
    })
})

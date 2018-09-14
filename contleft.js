
$(document).ready(function(){
    $(".categories-btn").click(function(){
        $(".light-btn").css("color","#191919");
        $(".light-btn").css("font-weight","400");
        $(".today-btn").css("color","#191919");
        $(".today-btn").css("font-weight","400");
        $(".categories-btn").css("color","orange");
        
        $(".categories-div").css("display","block");
        $(".contleft-middle").css("display","none");
        $(".contleft-bottom").css("visibility","hidden");
    })
})

$(document).ready(function(){
    $(".today-btn").click(function(){
        $(".light-btn").css("color","#191919");
        $(".light-btn").css("font-weight","400");
        $(".categories-btn").css("color","#191919");
        $(".today-btn").css("color","orange");
        $(".today-btn").css("font-weight","bold");
        
        $(".categories-div").css("display","none");
        $(".contleft-middle").css("display","block");
        $(".today-div").css("display","block");
        $(".light-div").css("display","none");
        $(".contleft-bottom").css("visibility","inherit");
    })
})


$(document).ready(function(){
    $(".light-btn").click(function(){
        $(".today-btn").css("color","#191919");
        $(".today-btn").css("font-weight","400");
        $(".categories-btn").css("color","#191919");
        $(".light-btn").css("color","orange");
        $(".light-btn").css("font-weight","bold");
        
        $(".categories-div").css("display","none");
        $(".contleft-middle").css("display","block");
        $(".light-div").css("display","block");
        $(".today-div").css("display","none");
        $(".contleft-bottom").css("visibility","inherit");
    })
})



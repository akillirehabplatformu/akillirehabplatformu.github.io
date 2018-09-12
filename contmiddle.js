$(document).ready(function(){
    if($(".contmiddle-top").height()==150){
        $(".contmiddle-middle").css("visibility","inherit");
    }
})
$(document).ready(function(){
    $(".contmiddle-middle").click(function(){
        $(".contmiddle-top").css("max-height","none");
        $(".contmiddle-middle").css("visibility","hidden");
        $(".contmiddle").css("grid-template-rows","4fr 1fr");
    })
})
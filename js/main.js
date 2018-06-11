
$('#searchicon').click(function(){
    $('#headersearch').css('display','inline-block');
});

/*START HIDE SIDE BARS OPENER AND CLOSER JS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
function openleftsidebar(){
    if(document.getElementById("hideleftsidebar").style.left=="-80%"){
        document.getElementById("hideleftsidebar").style.left="0";
    }
    else{
        document.getElementById("hideleftsidebar").style.left="-80%";
    }
}
function openrightsidebar(){
    if(document.getElementById("hiderightsidebar").style.display=="none"){
        document.getElementById("hiderightsidebar").style.display="block";
    }
    else{
        document.getElementById("hiderightsidebar").style.display="none";
    }
}
/*END HIDE SIDE BARS OPENER AND CLOSER JS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

$(document).ready(function(){
    $('.contmiddle').load('home.html');
});

/*START HEADER LEFT BUTTONS JS<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
$(document).ready(function(){
    $('#home').click(function(){
    $("#home").css("border-bottom","5px solid #58B19F");
    $("#notifications").css("border","none");
    $("#messages").css("border","none");
    $('.contmiddle').load('home.html');
});
});

$(document).ready(function(){
    $('#notifications').click(function(){
    $("#notifications").css("border-bottom","5px solid #58B19F");
    $("#home").css("border","none");
    $("#messages").css("border","none");
    $('.contmiddle').load('notifications.html');
        
});
});

$(document).ready(function(){
    $('#messages').click(function(){
    $("#messages").css("border-bottom","5px solid #58B19F");
    $("#home").css("border","none");
    $("#notifications").css("border","none");
    $('.contmiddle').load('messages.html');
});
});
/*END HEADER LEFT BUTTONS JS<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/


/*START TAB BUTTONS JS<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
$(document).ready(function(){
    $('#tab_home').click(function(){
    $('.contmiddle').load('home.html');
    $(".bottomtab i").css("border","none");
    $(this).css("border-top","2px solid black");
});
});

$(document).ready(function(){
    $('#tab_search').click(function(){
    $('.contmiddle').load('search.html');
    $(".bottomtab i").css("border","none");
    $(this).css("border-top","2px solid black");
});
});

$(document).ready(function(){
    $('#tab_notifications').click(function(){
    $('.contmiddle').load('notifications.html');
    $(".bottomtab i").css("border","none");
    $(this).css("border-top","2px solid black");
});
});

$(document).ready(function(){
    $('#tab_messages').click(function(){
    $('.contmiddle').load('messages.html');
    $(".bottomtab i").css("border","none");
    $(this).css("border-top","2px solid black");
});
});
/*END TAB BUTTONS JS<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/




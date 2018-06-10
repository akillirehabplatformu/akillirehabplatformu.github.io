function openheadersearch(){
    document.getElementById("headersearch").style.display="inline-block";
}
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
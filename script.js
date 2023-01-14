function chatBubble(){
    var chat = document.getElementById("bubble-chat");
    chat.style.display = chat.style.display == "none" ? "block" : "none";     
}

window.onscroll = function() { scroll_show() }

    function scroll_show(){

    var bubble = document.getElementById("back-bubble");

    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        bubble.style.display = "block";
    }else{
        bubble.style.display = "none";
    }

}

function go_to_top(){
    document.documentElement.scrollTop = 0;
}


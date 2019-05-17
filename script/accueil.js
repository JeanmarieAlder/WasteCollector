window.onload = function(){
    
    var btnInsta = document.getElementById("insta");
    var btnFb = document.getElementById("fb");
    var btnActeur = document.getElementById("acteur");
    var btnEvent = document.getElementById("event");
    
    btnInsta.addEventListener("click", clicInsta);
    btnFb.addEventListener("click", clicFb);
    btnActeur.addEventListener("click", clicActeur);
    btnEvent.addEventListener("click", clicEvent);
    
    function clicInsta(){
        window.open("https://www.instagram.com/initiative_region_propre/");
    }
    
    function clicFb(){
        window.open("https://www.facebook.com/regionpropre/");
    }
    
    function clicEvent(){
        window.location.href="events.html";
    }
    
    function clicActeur(){
        window.location.href="associations.html";
    }
    
}
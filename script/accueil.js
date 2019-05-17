window.onload = function(){
    
    var btnInsta = document.getElementById("insta");
    var btnFb = document.getElementById("fb");
    
    btnInsta.addEventListener("click", clicInsta);
    btnFb.addEventListener("click", clicFb);
    
    function clicInsta(){
        window.open("https://www.instagram.com/initiative_region_propre/");
    }
    
    function clicFb(){
        window.open("https://www.facebook.com/regionpropre/");
    }
    
}
var botonMitchell = document.getElementById("mitchellBtn");
var botonKevind = document.getElementById("kevindBtn");
var informacion = document.getElementById("information");
var mitchell = document.getElementById("infoMitchell");
var kevind = document.getElementById("infoKevind");
var moving = true;

var container = document.getElementById("articleCards");

botonMitchell.addEventListener("click",(event) =>{
    informacion.classList.toggle("informationShow");
    mitchell.classList.toggle("infoMitchellShow");
    container.style.display = 'none'
    informacion.style.animation = 'fadeInDownMitchell 0.7s ease-out'
    moving = false;
    kevind.hidden = true;
    mitchell.hidden = false;
});
botonKevind.addEventListener("click",(event) =>{
    informacion.classList.toggle("informationShow");
    kevind.classList.toggle("infoKevindShow");
    informacion.style.animation = 'fadeInDownKevind 0.7s ease-out'
    moving = false;
    mitchell.hidden = true;
    kevind.hidden = false;
});

var salirMitchell = document.getElementById("salirMitchell");
var salirKevind = document.getElementById("salirKevind");

salirMitchell.addEventListener("click",(event)=>{
    informacion.classList.remove("informationShow");
    mitchell.classList.remove("infoMitchellShow"); 
    moving = true;
    container.style.display = 'flex' 
});
salirKevind.addEventListener("click",(event)=>{
    informacion.classList.remove("informationShow");
    kevind.classList.remove("infoKevindShow");  
    moving = true;
});

window.addEventListener("scroll",function(){
    var aboutUs = document.getElementById("aboutUs");
    var positionAboutUs = aboutUs.getBoundingClientRect().top;
    var tamañoPantalla = window.innerHeight;

    if(positionAboutUs != 0){
        this.document.querySelector("header").style.position = 'fixed';
        this.document.querySelector("header").style.backgroundColor = 'black';
    }
    else{
        this.document.querySelector("header").style.position = 'relative';
        this.document.querySelector("header").style.backgroundColor = 'transparent';
    }
   
    var cardsBackground = document.getElementById("about-us-container");
    var positionCards = cardsBackground.getBoundingClientRect().top;
    var x1 = (positionCards /3);
    if(positionCards < tamañoPantalla && moving == true){
        cardsBackground.style.transform = "translate(0px," + x1 + "px)";
    }

    var divMitchell = document.getElementById("card-Mitchell");
    var positionMitchell = divMitchell.getBoundingClientRect().top;
    
    var x1 = (positionMitchell * -1) + 170;
   
    if(positionMitchell < tamañoPantalla && moving == true){
        divMitchell.style.transform = "translate(" + x1 + "px,0px)";
    }

    var divKevind = document.getElementById("card-Kevind");
    var positionKevind = divKevind.getBoundingClientRect().top;
    
    var x = positionKevind - 170;
    if(positionKevind < tamañoPantalla && moving == true){
        divKevind.style.transform = "translate(" + x + "px,0px)";
    }
});

   
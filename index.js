window.addEventListener("scroll",function(){
    var aboutUs = document.getElementById("aboutUs");
    var positionAboutUs = aboutUs.getBoundingClientRect().top;
    var tamañoPantalla = window.innerHeight;
    console.log(positionAboutUs);

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
    if(positionCards < tamañoPantalla){
        cardsBackground.style.transform = "translate(0px," + x1 + "px)";
    }

    var divMitchell = document.getElementById("card-Mitchell");
    var positionMitchell = divMitchell.getBoundingClientRect().top;
    var tamañoPantalla = window.innerHeight;
    
    var x1 = (positionMitchell * -1) + 170;
   
    if(positionMitchell < tamañoPantalla){
        divMitchell.style.transform = "translate(" + x1 + "px,0px)";
    }

    var divKevind = document.getElementById("card-Kevind");
    var positionKevind = divKevind.getBoundingClientRect().top;
    
    var x = positionKevind - 170;
    if(positionKevind < tamañoPantalla){
        divKevind.style.transform = "translate(" + x + "px,0px)";
    }
});

    var botonMitchell = document.getElementById("mitchellBtn");
    var botonKevind = document.getElementById("kevindBtn");

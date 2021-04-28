addEventListener('load',function(){
    var load = document.querySelector(".load");
    var container = document.querySelector(".container");
    var hamburguer = document.querySelector(".hamburguer");
    var navi = document.querySelector("nav");
    load.style.display="none";
    container.style.display="flex";
    hamburguer.addEventListener('click', function(){
        container.classList.toggle("show-menu");
    })
    navi.addEventListener('click',function(){
        navi.classList.toggle("active-SM");
    })
    
    
    
})
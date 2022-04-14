const navbar = document.querySelector(".navbar");
const navbar_brand = document.querySelector(".navbar-brand");
const navbar_nav = document.querySelectorAll(".navbar-collapse .nav-link");
window.onscroll=function(){
    if(scrollY>0){
        navbar.setAttribute("style","background-color:white");
        navbar_brand.setAttribute("style","color:black");
        for(var i = 0 ; i<navbar_nav.length;i++){
            navbar_nav[i].setAttribute("style","color:black")
        }
        
    }
    else{
        navbar.setAttribute("style","background-color:none");
        navbar_brand.setAttribute("style","color:white");
        for(var i = 0 ; i<navbar_nav.length;i++){
            navbar_nav[i].setAttribute("style","color:white")
        }
        
    }
}
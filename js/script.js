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

var members = document.querySelectorAll(".team .mem");
var pop_up = document.querySelector(".pop-up");
var social_pop_up = document.querySelectorAll(".socail-pop-up");


for (var x = 0 ; x<members.length;x++){
    members[x].addEventListener("mouseover",function(){
        this.children[1].setAttribute("style","transform:translateX(0)")
        this.children[0].setAttribute("style","transform:translateX(-200px)")
    })
    members[x].addEventListener("mouseleave",function(){
        this.children[1].setAttribute("style","transform:translateX(-160px)")
        this.children[0].setAttribute("style","transform:translateX(0)")
    })
}
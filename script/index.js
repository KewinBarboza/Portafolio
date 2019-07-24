$(document).ready(function(){
    $(".button").click(function(){
        var value = $(this).attr("data-filter");
        if(value == "todos"){
            $(".filter").show("1000");
        }else{
            $(".filter").not("."+value).hide("1000");
            $(".filter").filter("."+value).show("1000");
        }

        $("ul .button").click(function(){
            $(this).addClass("active").siblings().removeClass('active');
        })
    })
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.onscroll = function() {
    var element = document.getElementById("navbar-sombra");

    if(window.scrollY > '700'){
        console.log('600');
        element.classList.add("menuSombra");
        element.classList.add("fixed-top");
    }else if(window.scrollY < '700'){
        element.classList.remove("menuSombra"); 
    }
};

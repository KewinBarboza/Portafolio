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
    const acerca =  document.getElementById('acerca');
    const experiencia =  document.getElementById('experiencia');
    const portafolio =  document.getElementById('portafolio');
    const herramientas =  document.getElementById('herramientas');
    const contacto =  document.getElementById('contacto');
    
    if(window.scrollY > '1'){
        element.classList.add("menuSombra","fixed-top",'animated', 'pulse');
        acerca.classList.add('animated', 'fadeIn','delay-1s')
    }else if(window.scrollY < '700'){
        element.classList.remove("menuSombra"); 
    }

    if(window.scrollY > '150'){
        experiencia.classList.add('animated', 'fadeIn','delay-2s')
    }

    if(window.scrollY > '950'){
        portafolio.classList.add('animated', 'fadeIn','delay-2s')
        
    }
    if(window.scrollY > '2100'){
        herramientas.classList.add('animated', 'fadeIn','delay-2s')
        
    }

    if(window.scrollY > '3000'){
        contacto.classList.add('animated', 'fadeIn','delay-2s')
        
    }
};



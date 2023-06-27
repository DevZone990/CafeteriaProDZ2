const seccionesOcultas = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        entry.target.classList.toggle('mostrar', entry.isIntersecting);
    })
})
seccionesOcultas.forEach((seccion)=>observer.observe(seccion));
//nav
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = ()=>{
    navbar.classList.toggle('active');
}

//optenemos los enlaces del navbar
const enlaces = navbar.querySelectorAll('a');
//agregamos el controlador
enlaces.forEach(function(enlace){
    enlace.addEventListener('click',function(){
        navbar.classList.remove('active');
    })

});
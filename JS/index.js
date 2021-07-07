const navToggle = document.querySelector('.header__nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

var loader = document.getElementById("preloader");

window.addEventListener("load",function(){
    loader.style.display="none";
})
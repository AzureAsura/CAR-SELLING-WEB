const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if (navToggle) {
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}

if (navClose) {
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav__link');

const linkAction = () =>{
    const  navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');

    
}
navLink.forEach(n => n.addEventListener('click', linkAction));

const bgHeader = () =>{
    const header = document.getElementById('header');
    this.scrollY >= 50 ? header.classList.add('bg-header')
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', bgHeader)

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 300,
})

sr.reveal(`.geser-kiri`,{interval: 100 })
sr.reveal(`.geser-kanan`,{origin: 'left' })
sr.reveal(`.geser-telor`,{origin: 'right' })
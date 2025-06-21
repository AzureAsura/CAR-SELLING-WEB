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

const swiperHome = new Swiper('.home__swiper',{
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: (index, className) => {
            return '<span class="' + className + '">' + String(index + 1).padStart(2, '0') + "</span>";
        },
    },
})

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

sr.reveal(`.home__bg`, {scale: 1.1, opacity:1 })
sr.reveal(`.home__swiper`, {origin: 'right', distance: '300px', delay: 800})
sr.reveal(`.home__data`, {origin: 'bottom', distance: '120px', delay: 1600})
sr.reveal(`.swiper-pagination-bullet`, {origin: 'top', delay: 1600, opacity: 0})
sr.reveal(`.home__button`, {origin: 'top', delay: 2200})
sr.reveal(`.geser-kiri`,{interval: 100 })
sr.reveal(`.about__data`,{origin: 'left' })
sr.reveal(`.about__video`,{origin: 'right' })

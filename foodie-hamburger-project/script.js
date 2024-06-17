const hamburgerIcon = document.querySelector('.hamburger-menu');
const headerContent = document.querySelector('.header-content');
const closeIcon = document.querySelector('.close-icon');
const goToTop = document.querySelector('.go-to-top');
const nav = document.querySelector('nav');


hamburgerIcon.addEventListener('click', (e)=>{
    e.stopPropagation();
    headerContent.classList.add('menu-open')
})

headerContent.addEventListener('click', (e)=>{
    e.stopPropagation();
})

nav.addEventListener('click', (e)=>{
   e.stopPropagation()
})

closeIcon.addEventListener('click', ()=>{
    headerContent.classList.remove('menu-open')
})

window.addEventListener('click', (e)=>{
    e.stopPropagation();
    headerContent.classList.remove('menu-open')
})



// goToTop.addEventListener('click',()=>{
//     goToTop.scrollTo(0,0);
// })
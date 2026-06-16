document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio page loaded');
    
    // smooth scrooll
    document.documentElement.style.scrollBehavior = 'smooth';

});

const navLinks = document.querySelector('.nav-links');
function onToggleMenu(e){
    e.name = e.name === "menu" ? "close" : "menu";
    navLinks.classList.toggle('top-[9%]')
}
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const fullscreenMenu = document.querySelector('.fullscreen-menu');
    const closeBtn = document.querySelector('.close-btn');
    const body = document.body;
    
    // Gestion du menu burger
    menuToggle.addEventListener('click', function() {
        this.classList.toggle('open');
        fullscreenMenu.classList.toggle('open');
        body.classList.toggle('no-scroll');
    });
    
    // Fermeture du menu
    closeBtn.addEventListener('click', function() {
        menuToggle.classList.remove('open');
        fullscreenMenu.classList.remove('open');
        body.classList.remove('no-scroll');
    });
    
    // Fermeture au clic sur les liens
    const menuLinks = document.querySelectorAll('.fullscreen-menu ul li a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.classList.remove('open');
            fullscreenMenu.classList.remove('open');
            body.classList.remove('no-scroll');
        });
    });
    
    // Effet de scroll sur le header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.main-header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});
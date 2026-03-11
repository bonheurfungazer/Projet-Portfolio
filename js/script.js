document.addEventListener('DOMContentLoaded', () => {
    // Menu hamburger pour mobile
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Filtres CSS purs (Bonus : petite logique JS pour cacher/montrer les images si on veut aller plus loin, mais le cahier des charges dit "uniquement en CSS". On va donc implémenter une logique CSS pure dans la page portfolio.html)
});

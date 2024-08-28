window.addEventListener('scroll', function() {
    var navbar = document.getElementById('nav');
    var heroSection = document.getElementById('hero');
    var heroHeight = heroSection.offsetHeight;

    if (window.scrollY >= heroHeight / 2) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

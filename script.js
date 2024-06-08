window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    navbar.style.backgroundColor = window.scrollY > 50 ? '#222' : '#333';
});


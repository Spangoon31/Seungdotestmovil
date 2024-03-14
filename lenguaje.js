document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    const bars = document.querySelectorAll('.bar');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('show');
        bars.forEach(bar => bar.classList.toggle('active'));
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.menu-button');
    const navList = document.querySelector('.nav-list');

    menuButton.addEventListener('click', function() {
        navList.classList.toggle('active');
        this.classList.toggle("active"); 
    });
});



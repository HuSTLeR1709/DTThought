document.addEventListener('DOMContentLoaded', function() {
 
    const backIcon = document.querySelector('.fa-arrow-circle-left');
    const closeIcon = document.querySelector('.close');
    const sideMenu = document.querySelector('.side-menu');
    const leftTop = document.querySelector('.left-top');
    const closeTop = document.querySelector('.close-top');

    backIcon.addEventListener('click', function() {
        sideMenu.classList.add('open');
        leftTop.classList.add('open');
        closeTop.classList.add('open');
        backIcon.style.display = 'none';
    });

    closeIcon.addEventListener('click', function() {
        sideMenu.classList.remove('open');
        leftTop.classList.remove('open');
        closeTop.classList.remove('open');
        backIcon.style.display = 'flex';
    });

});





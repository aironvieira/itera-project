
document.addEventListener('DOMContentLoaded', (event) => {

    var nav_menu = document.querySelector('#nav-icon3');  
    var header = document.querySelector('#header');

    nav_menu.addEventListener('click', function(){
        nav_menu.classList.toggle('open');
        header.classList.toggle('open');
    });

    window.addEventListener('scroll', function(){
        if(window.pageYOffset > 50){
            header.classList.add('back-fixed');
        }else{
            header.classList.remove('back-fixed');
        }  
    });

});




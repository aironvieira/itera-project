
document.addEventListener('DOMContentLoaded', (event) => {

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
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




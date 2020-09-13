
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
    var testimonial_prev = document.querySelector('.testimonial-button-prev');
    var testimonial_next = document.querySelector('.testimonial-button-next');

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

    var categories = document.querySelectorAll('.category');

    for (let i = 0; i < categories.length; i++) {
        categories[i].addEventListener('click', function(){
            document.querySelector('.actived-category').classList.remove('actived-category');
            categories[i].classList.add('actived-category');       
        });
    }

    document.querySelector('p.all-categories').addEventListener('click', function(){
        document.querySelector('.actived-div-category').classList.remove('actived-div-category');
        document.querySelector('div.all-categories').classList.add('actived-div-category');
    });

    document.querySelector('p.web-design').addEventListener('click', function(){
        document.querySelector('.actived-div-category').classList.remove('actived-div-category');
        document.querySelector('div.web-design').classList.add('actived-div-category');
    });

    document.querySelector('p.a3d').addEventListener('click', function(){
        document.querySelector('.actived-div-category').classList.remove('actived-div-category');
        document.querySelector('div.a3d').classList.add('actived-div-category');
    });

    document.querySelector('p.branding').addEventListener('click', function(){
        document.querySelector('.actived-div-category').classList.remove('actived-div-category');
        document.querySelector('div.branding').classList.add('actived-div-category');
    });

    document.querySelector('p.mobile').addEventListener('click', function(){
        document.querySelector('.actived-div-category').classList.remove('actived-div-category');
        document.querySelector('div.mobile').classList.add('actived-div-category');
    });

    document.querySelector('p.typography').addEventListener('click', function(){
        document.querySelector('.actived-div-category').classList.remove('actived-div-category');
        document.querySelector('div.typography').classList.add('actived-div-category');
    });

    var next_func = function(e){
        testimonial_prev.addEventListener('click', prev_func);
        if(document.querySelector('.testimonial1.active-testimonial')){
            document.querySelector('.testimonial1.active-testimonial').classList.remove('active-testimonial');
            document.querySelector('.testimonial2').classList.add('active-testimonial');
            testimonial_next.classList.remove('blocked-button');
            testimonial_prev.classList.remove('blocked-button');
        }else if(document.querySelector('.testimonial2.active-testimonial')){
            document.querySelector('.testimonial2.active-testimonial').classList.remove('active-testimonial');
            document.querySelector('.testimonial3').classList.add('active-testimonial');
            testimonial_prev.classList.remove('blocked-button');
        }else{
            document.querySelector('.testimonial3.active-testimonial');
            document.querySelector('.testimonial3.active-testimonial').classList.remove('active-testimonial');
            document.querySelector('.testimonial4').classList.add('active-testimonial');
            testimonial_next.classList.add('blocked-button');
            testimonial_next.removeEventListener('click', next_func);
        }
    }
    testimonial_next.addEventListener('click', next_func);

    var prev_func = function(e){
        testimonial_next.addEventListener('click', next_func);
        if(document.querySelector('.testimonial4.active-testimonial')){
            document.querySelector('.testimonial4.active-testimonial').classList.remove('active-testimonial');
            document.querySelector('.testimonial3').classList.add('active-testimonial');
            testimonial_prev.classList.remove('blocked-button');
            testimonial_next.classList.remove('blocked-button');
        }else if(document.querySelector('.testimonial3.active-testimonial')){
            document.querySelector('.testimonial3.active-testimonial').classList.remove('active-testimonial');
            document.querySelector('.testimonial2').classList.add('active-testimonial');
            testimonial_next.classList.remove('blocked-button');
        }else{
            document.querySelector('.testimonial2.active-testimonial');
            document.querySelector('.testimonial2.active-testimonial').classList.remove('active-testimonial');
            document.querySelector('.testimonial1').classList.add('active-testimonial');
            testimonial_prev.removeEventListener('click', prev_func);
            testimonial_prev.classList.add('blocked-button');
            testimonial_next.classList.remove('blocked-button');
        }
    }
    testimonial_prev.addEventListener('click', prev_func);
});




const header = document.querySelector('header');
const navLinks = document.querySelectorAll('.header_nav_link');
const logo = document.querySelector('.logo');
const btnHeader = document.querySelectorAll('.btn_header');

let triggerPoint = 800;

window.addEventListener('scroll', () => {
    if (window.scrollY > triggerPoint) {
            header.classList.add('header_scrolled');
            navLinks.forEach(link => link.classList.add('header_nav_link_scrolled')); 
            logo.classList.add('logo_scrolled');  
            btnHeader.forEach(link => link.classList.add('btn_header_scrolled'));

        }
        else {
            header.classList.remove('header_scrolled');
            navLinks.forEach(link => link.classList.remove('header_nav_link_scrolled'));
            logo.classList.remove('logo_scrolled'); 

            btnHeader.forEach(link => link.classList.remove('btn_header_scrolled'));

    }
});


// window.addEventListener('scroll', () => {
//     // Высота страницы с учетом прокрутки
//     const scrollPosition = window.scrollY + window.innerHeight;
//     // Полная высота документа
//     const documentHeight = document.documentElement.scrollHeight;

//     if (scrollPosition >= documentHeight) {
//         header.classList.remove('header_scrolled');
//         navLinks.forEach(link => link.classList.remove('header_nav_link_scrolled'));
//         logo.classList.remove('logo_scrolled');
//         btnHeader.forEach(link => link.classList.remove('btn_header_scrolled'));
//     }
// });

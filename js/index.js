// let menu = document.querySelector('#munu-icon');
// let navbar = document.querySelector('.navber');

// menu.onclick = () =>{
//     menu.classList.toggle('bx');
//     navbar.classList.toggle('active')
// }
// window.onscroll = () => {
//     menu.classList.remove('bx');
//     navbar.classList.remove('active');
// }


document.addEventListener("DOMContentLoaded", () => {
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menu.onclick = () => {
        menu.classList.toggle('bx');
        navbar.classList.toggle('active');
    }

    window.onscroll = () => {
        menu.classList.remove('bx');
        navbar.classList.remove('active');
    }
});



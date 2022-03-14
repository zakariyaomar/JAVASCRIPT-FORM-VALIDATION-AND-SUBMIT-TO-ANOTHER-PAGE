const burgerMenu = document.querySelector('.burger-menu');

const sidebarList = document.querySelector('.sidebar-list');


window.addEventListener('resize', ()=>{
    if(window.innerWidth > 900){
        burgerMenu.classList.remove('clicked');
    sidebarList.classList.remove('show-sidebar');
    }
})

burgerMenu.addEventListener('click', ()=>{
    burgerMenu.classList.toggle('clicked');
    sidebarList.classList.toggle('show-sidebar');
})
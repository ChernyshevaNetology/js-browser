const menu = document.querySelector('.menu_main');

const clicker = (event) => {
    const nextSibling = event.target.nextElementSibling;

    if(nextSibling) {
        event.preventDefault();
        nextSibling.classList.toggle('menu_active');
        }

}
menu.addEventListener('click', clicker);



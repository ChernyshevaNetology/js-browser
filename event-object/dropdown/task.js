const button = document.querySelector('.dropdown__value');
const menuItems = document.querySelector('.dropdown__list');

const handleButtonExpansion = () => {
    menuItems.classList.toggle('dropdown__list_active');
    }

const handleButtonClickAction = (event) => {
    event.preventDefault();
    button.textContent = event.target.textContent;
    menuItems.classList.toggle('dropdown__list_active');
}

button.addEventListener('click', handleButtonExpansion);
menuItems.addEventListener('click', handleButtonClickAction);



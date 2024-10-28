const button = document.querySelector('.dropdown__value');
const menuItems = document.querySelector('.dropdown__list');

const handleButtonExpansion = (event) => {
    const buttonExpanded = event.target.nextElementSibling;
    if(buttonExpanded) {
        event.preventDefault();
        buttonExpanded.classList.toggle('dropdown__list_active');
    }
}

const handleButtonClickAction = (event) => {
    const menuItem = event.target;
    if(menuItem) {
        button.textContent = menuItem.textContent;
    }
}

button.addEventListener('click', handleButtonExpansion);
menuItems.addEventListener('click', handleButtonClickAction);



const tabs = document.querySelector('.tabs');
const tabCollection = [...document.querySelectorAll('.tab')];
const contentCollection = [...document.querySelectorAll('.tab__content')];

let currentTab = 0;

const handleTabClickAction = (event) => {
    const index = +event.target.getAttribute('data-index');
    handleTabDeactivation();
    currentTab = index;
    handleTabActivation();
    }

for(let i = 0; i < tabCollection.length; i++) {
    tabCollection[i].setAttribute('data-index', (i + 1) - 1);
    contentCollection[i].setAttribute('data-index', (i + 1) - 1);
}

const handleTabActivation = () => {
    tabCollection[currentTab].classList.add('tab_active');
    contentCollection[currentTab].classList.add('tab__content_active');
    }

const handleTabDeactivation = () => {
    tabCollection[currentTab].classList.remove('tab_active');
    contentCollection[currentTab].classList.remove('tab__content_active');
    }

tabs.addEventListener('click', handleTabClickAction);
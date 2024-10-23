const sliderItems = [...document.querySelectorAll('.slider__item')];
const dotContainer = document.querySelector('.slider__dots');
const prevArrow = document.querySelector('.slider__arrow_prev');
const nextArrow = document.querySelector('.slider__arrow_next');

let currentSliderIndex = 0;
const sliderCount = sliderItems.length;

const createDotElem = (idx) => {
    const dotElem = document.createElement('div');
    dotElem.classList.add('slider__dot');
    dotElem.setAttribute('data-index', idx);
    if(idx === 0) {
        dotElem.classList.add('slider__dot_active')
    }

    return dotElem;
}

for (let i = 0; i < sliderCount; i++) {
    dotContainer.appendChild(createDotElem(i));
}
const dots = [...document.querySelectorAll('.slider__dot')];

const handleDotClick = (event) => {
    const index = +event.target.getAttribute('data-index');
    handleAddActiveStatus();
    handleRemoveActiveStatus();
    currentSliderIndex = index;
    handleAddActiveStatus();
}

const handleDisplayNextImage = () => {
    currentSliderIndex = (currentSliderIndex + 1) % sliderItems.length;
}

const handleDisplayPrevImage = () => {
    currentSliderIndex = (currentSliderIndex - 1 + sliderItems.length) % sliderItems.length;
}

const handleRemoveActiveStatus = () => {
    sliderItems[currentSliderIndex].classList.remove('slider__item_active');
    dots[currentSliderIndex].classList.remove('slider__dot_active');
    }

const handleAddActiveStatus = () => {
    sliderItems[currentSliderIndex].classList.add('slider__item_active');
    dots[currentSliderIndex].classList.add('slider__dot_active');
    }

const prevArrowSelector = () => {
    handleRemoveActiveStatus();
    handleDisplayPrevImage();
    handleAddActiveStatus();
    }

const nextArrowSelector = () => {
    handleRemoveActiveStatus();
    handleDisplayNextImage();
    handleAddActiveStatus();
}

prevArrow.addEventListener('click', prevArrowSelector);
nextArrow.addEventListener('click', nextArrowSelector);
dotContainer.addEventListener('click', handleDotClick);

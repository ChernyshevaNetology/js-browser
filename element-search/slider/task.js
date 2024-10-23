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
    dots[index].classList.add('slider__dot_active');
    HandleRemoveActiveStatus();
    currentSliderIndex = index;
    HandleAddActiveStatus();
}

const handleDisplayNextImage = () => {
    currentSliderIndex = (currentSliderIndex + 1) % sliderItems.length;
}

const HandleDisplayPrevImage = () => {
    currentSliderIndex = (currentSliderIndex - 1 + sliderItems.length) % sliderItems.length;
}

const HandleRemoveActiveStatus = () => {
    sliderItems[currentSliderIndex].classList.remove('slider__item_active');
    dots[currentSliderIndex].classList.remove('slider__dot_active');
    }

const HandleAddActiveStatus = () => {
    sliderItems[currentSliderIndex].classList.add('slider__item_active');
    dots[currentSliderIndex].classList.add('slider__dot_active');
    }

const prevSelector = () => {
    HandleRemoveActiveStatus();
    HandleDisplayPrevImage();
    HandleAddActiveStatus();
    }

const nextSelector = () => {
    HandleRemoveActiveStatus();
    handleDisplayNextImage();
    HandleAddActiveStatus();
}

prevArrow.addEventListener('click', prevSelector);
nextArrow.addEventListener('click', nextSelector);
dotContainer.addEventListener('click', handleDotClick);

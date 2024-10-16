const slidingImg = [...document.querySelectorAll('.slider__item')];
const dots = [...document.querySelectorAll('.slider__dot')];
const dotEvent = document.querySelector('slider__dots');
const prevArrow = document.querySelector('.slider__arrow_prev');
const nextArrow = document.querySelector('.slider__arrow_next');

let currentImg = 0;
let currentDot = 0;
dots[currentDot].classList.add('slider__dot_active');

const activeStatusRemoved = () => {
    slidingImg[currentImg].classList.remove('slider__item_active');
    dots[currentDot].classList.remove('slider__dot_active');
    }

const activeStatusAdded = () => {
    slidingImg[currentImg].classList.add('slider__item_active');
    dots[currentDot].classList.add('slider__dot_active');
}

const dotClicker = (event) => {
    if (!event.target.classList.contains('slider__dot_active')) {
        const clickedDot = event.target;
        const dotIndex = dots.indexOf(clickedDot);
        dots[dotIndex].classList.add('slider__dot_active');
    }
}

const nextCounter = () => {
    currentImg = (currentImg + 1) % slidingImg.length;
    currentDot = (currentDot + 1) % dots.length;
}

const prevCounter = () => {
    currentImg = (currentImg - 1 + slidingImg.length) % slidingImg.length;
    currentDot = (currentDot - 1 + dots.length) % dots.length;
}

const prevSelector = () => {
    activeStatusRemoved();
    prevCounter();
    activeStatusAdded();
    }

const nextSelector = () => {
    activeStatusRemoved();
    nextCounter();
    activeStatusAdded();
}

prevArrow.addEventListener('click', prevSelector);
nextArrow.addEventListener('click', nextSelector);
dotEvent.addEventListener('click', dotClicker);

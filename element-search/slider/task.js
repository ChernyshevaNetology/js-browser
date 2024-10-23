const slidingImg = [...document.querySelectorAll('.slider__item')];
const dotsContainer = document.querySelector('.slider__dots');
const prevArrow = document.querySelector('.slider__arrow_prev');
const nextArrow = document.querySelector('.slider__arrow_next');

let currentImg = 0;
const count = slidingImg.length;

const createDotElem = (idx) => {
    const dotElem = document.createElement('div');
    dotElem.classList.add('slider__dot');
    dotElem.setAttribute('data-index', idx);
    if(idx === 0) {
        dotElem.classList.add('slider__dot_active')
    }

    return dotElem;
}

for (let i = 0; i < count; i++) {
    dotsContainer.appendChild(createDotElem(i));
}
const dots = [...document.querySelectorAll('.slider__dot')];

const handleDotClick = (event) => {
    const index = +event.target.getAttribute('data-index');
    dots[index].classList.add('slider__dot_active');
    activeStatusRemoved();
    currentImg = index;
    activeStatusAdded();
}

const nextCounter = () => {
    currentImg = (currentImg + 1) % slidingImg.length;
}

const prevCounter = () => {
    currentImg = (currentImg - 1 + slidingImg.length) % slidingImg.length;
}

const activeStatusRemoved = () => {
    slidingImg[currentImg].classList.remove('slider__item_active');
    dots[currentImg].classList.remove('slider__dot_active');
    }

const activeStatusAdded = () => {
    slidingImg[currentImg].classList.add('slider__item_active');
    dots[currentImg].classList.add('slider__dot_active');
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
dotsContainer.addEventListener('click', handleDotClick);

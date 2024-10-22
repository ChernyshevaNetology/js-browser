const slidingImg = [...document.querySelectorAll('.slider__item')];
const dots = document.querySelector('.slider__dots');
const prevArrow = document.querySelector('.slider__arrow_prev');
const nextArrow = document.querySelector('.slider__arrow_next');

let currentImg = 0;
const count = slidingImg.length;
// dots[currentImg].classList.add('slider__dot_active'); // раскометируй когда точки динамически отрисуешь

const activeStatusRemoved = () => {
    slidingImg[currentImg].classList.remove('slider__item_active');
    dots[currentImg].classList.remove('slider__dot_active'); // раскометируй когда точки динамически отрисуешь
    }

const activeStatusAdded = () => {
    slidingImg[currentImg].classList.add('slider__item_active');
    dots[currentImg].classList.add('slider__dot_active'); // раскометируй когда точки динамически отрисуешь
}

const createDotElem = (idx) => {
    const dotElem = document.createElement('div');
    dotElem.classList.add('slider__dot');
    dotElem.setAttribute('data-index', idx);
    return dotElem;
}

for (let i = 0; i < count; i++) {
    dots.appendChild(createDotElem(i));
    }

const handleDotClick = (event) => {
const index = +event.target.getAttribute('data-index');
console.log('index', index);
}

const nextCounter = () => {
    currentImg = (currentImg + 1) % slidingImg.length;
    }

const prevCounter = () => {
    currentImg = (currentImg - 1 + slidingImg.length) % slidingImg.length;
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
dots.addEventListener('click', handleDotClick);

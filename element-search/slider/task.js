const slidingImg = [...document.querySelectorAll('.slider__item')];
const prevArrow = document.querySelector('.slider__arrow_prev');
const nextArrow = document.querySelector('.slider__arrow_next');

let currentImg = 0;

const prevSelector = () => {
    slidingImg[currentImg].classList.remove('slider__item_active');
    currentImg = (currentImg - 1 + slidingImg.length) % slidingImg.length;
    slidingImg[currentImg].classList.add('slider__item_active');
    }

const nextSelector = () => {
    slidingImg[currentImg].classList.remove('slider__item_active');
    currentImg = (currentImg + 1) % slidingImg.length;
    slidingImg[currentImg].classList.add('slider__item_active');
}

prevArrow.addEventListener('click', prevSelector);
nextArrow.addEventListener('click', nextSelector);

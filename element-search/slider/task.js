const slidingImg = [...document.querySelectorAll('.slider__item')];
const slidingArrows = [...document.querySelectorAll('.slider__arrow')];

let currentImg = 0;

const sliderSelector = (event) => {
    const item = event.target;
    if (item.classList.contains('slider__arrow_next')) {
        slidingImg[currentImg].classList.remove('slider__item_active');
        currentImg = (currentImg + 1) % slidingImg.length;
        slidingImg[currentImg].classList.add('slider__item_active');
    }
    if (item.classList.contains('slider__arrow_prev')) {
        slidingImg[currentImg].classList.remove('slider__item_active');
        currentImg = (currentImg - 1 + slidingImg.length) % slidingImg.length;
        slidingImg[currentImg].classList.add('slider__item_active');
    }
}

slidingArrows.forEach(arrow => arrow.addEventListener('click', sliderSelector));

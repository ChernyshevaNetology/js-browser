const fontSizeLinks = document.querySelectorAll('.book .font-size');
const colorLinks = document.querySelectorAll('.book__control_color a');
const backgroundLinks = document.querySelectorAll('.book__control_background a');
const bookBlock = document.querySelector('.book');
const textBlock = document.querySelector('.book__control_color');
const backgroundBlock = document.querySelector('.book__control_background');

let prevSize = null;
let prevTextColor = null;
let prevBackgroundColor = null;

const handleSizeSelection = (event) => {
        event.preventDefault();
        fontSizeLinks.forEach((link) => {
                if (link.classList.contains('font-size_active')) {
                        prevSize = link.dataset.size;
                        link.classList.remove('font-size_active');
                }
        })

        event.target.classList.add('font-size_active');

        if(prevSize) {
                bookBlock.classList.remove(`book_fs-${prevSize}`);
        }

        const dataSet = event.target.dataset.size;

        if (dataSet) {
                bookBlock.classList.add(`book_fs-${dataSet}`);
        }
}

const handleColorSelection = (eventObject) => {
        eventObject.preventDefault();
        colorLinks.forEach((color) => {
                if (color.classList.contains('color_active')) {
                        prevTextColor = color.dataset.textColor;
                        color.classList.remove('color_active');
                }
        })
        eventObject.target.classList.add('color_active');

        if(prevTextColor) {
                bookBlock.classList.remove(`book_color-${prevTextColor}`);
        }

        const colorSet = eventObject.target.dataset.textColor;

        if (colorSet) {
                bookBlock.classList.add(`book_color-${colorSet}`);

        }
}

const handleBackgroundSelection = (e) => {
        e.preventDefault();
        backgroundLinks.forEach((bg) => {
                if (bg.classList.contains('color_active')) {
                        prevBackgroundColor = bg.dataset.bgColor;
                        bg.classList.remove('color_active');
                }
        })
        e.target.classList.add('color_active');

        if(prevBackgroundColor) {
                bookBlock.classList.remove(`book_bg-${prevBackgroundColor}`);
        }

        const backgroundSet = e.target.dataset.bgColor;

        if(backgroundSet) {
                bookBlock.classList.add(`book_bg-${backgroundSet}`);
        }
}

bookBlock.addEventListener('click', handleSizeSelection);
textBlock.addEventListener('click', handleColorSelection);
backgroundBlock.addEventListener('click', handleBackgroundSelection);
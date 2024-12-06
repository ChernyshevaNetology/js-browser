const fontBlock = document.querySelector('.book__control');
const fontSizeLinks = document.querySelectorAll('.book .font-size');
const bookBlock = document.querySelector('.book');
let prevSize = null;

const handleButtonClicking = (event) => {
        event.preventDefault();
        fontSizeLinks.forEach((link) => {
                if (link.classList.contains('font-size_active')) {
                        prevSize = link.dataset.size;
                        bookBlock.classList.remove(`book_fs-${prevSize}`)
                        link.classList.remove('font-size_active');
                }
        })
        event.target.classList.add('font-size_active');

        const dataSet = event.target.dataset.size;

        if (dataSet) {
                bookBlock.classList.add(`book_fs-${dataSet}`);

        }
}
fontBlock.addEventListener('click', handleButtonClicking);
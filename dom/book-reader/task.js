const fontBlock = document.querySelector('.book__control');
const fontSizeLinks = document.querySelectorAll('.book .font-size');
const bookBlock = document.querySelector('.book');

const handleSmallClassCleaning = () => {
        bookBlock.classList.remove('book_fs-small')
}

const handleBigClassCleaning = () => {
        bookBlock.classList.remove('font-size_big');
}

const handleButtonClicking = (event) => {
        event.preventDefault();
        fontSizeLinks.forEach((link) => {
                if (link.classList.contains('font-size_active')) {
                        link.classList.remove('font-size_active');
                }
        })
        event.target.classList.add('font-size_active');

        if (event.target.dataset.size === 'big') {
                handleSmallClassCleaning();
                bookBlock.classList.add('font-size_big');
        }
        if (event.target.dataset.size === 'small') {
                handleBigClassCleaning();
                bookBlock.classList.add('book_fs-small');
        }
        if (!event.target.dataset.size) {
                handleBigClassCleaning();
                handleSmallClassCleaning();
             }
}

fontBlock.addEventListener('click', handleButtonClicking);
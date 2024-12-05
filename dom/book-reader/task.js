const fontBlock = document.querySelector('.book__control');
const fontSizeLinks = document.querySelectorAll('.book .font-size');
const bookBlock = document.querySelector('.book');

const handleClassCleansing = () => {
        bookBlock.classList.remove('book_fs-small', 'book_fs-big');
}

const handleButtonClicking = (event) => {
        event.preventDefault();
        fontSizeLinks.forEach((link) => {
                if (link.classList.contains('font-size_active')) {
                        link.classList.remove('font-size_active');
                }
        })
        event.target.classList.add('font-size_active');

        const dataSet = event.target.dataset.size;

        if (dataSet) {
                handleClassCleansing();
                bookBlock.classList.add(`book_fs-${dataSet}`);

                } else {
                handleClassCleansing();
        }
}
fontBlock.addEventListener('click', handleButtonClicking);
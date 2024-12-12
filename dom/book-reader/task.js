const bookBlock = document.querySelector('.book');
const textSizeBlock = document.querySelector('.book__control_font-size');
const textColorBlock = document.querySelector('.book__control_color');
const backgroundColorBlock = document.querySelector('.book__control_background');

const handleActiveIconClassChange = (domElement, activeClass, key, classPrefix) => {
        const lineWithEnabledClass = domElement.querySelector('.' + activeClass);
        lineWithEnabledClass.classList.remove(activeClass);
        const keyValue = lineWithEnabledClass.dataset[key];
        const classSelector = `${classPrefix + keyValue}`;
        if(classSelector) {
                bookBlock.classList.remove(classSelector);
        }
}

const handleSizeSelection = (event) => {
        event.preventDefault();
        handleActiveIconClassChange(textSizeBlock, 'font-size_active', 'size', 'book_fs-');
        event.target.classList.add('font-size_active');
        const dataSet = event.target.dataset.size;
        if (dataSet) {
                bookBlock.classList.add(`book_fs-${dataSet}`);
        }
}

const handleColorSelection = (event) => {
        event.preventDefault();
        handleActiveIconClassChange(textColorBlock, 'color_active', 'textColor', 'book_color-');
        event.target.classList.add('color_active');
        const colorSet = event.target.dataset.textColor;
        if (colorSet) {
                bookBlock.classList.add(`book_color-${colorSet}`);

        }
}

const handleBackgroundSelection = (event) => {
        event.preventDefault();
        handleActiveIconClassChange(backgroundColorBlock, 'color_active', 'bgColor', 'book_bg-');
        event.target.classList.add('color_active');
        const backgroundSet = event.target.dataset.bgColor;
        if(backgroundSet) {
                bookBlock.classList.add(`book_bg-${backgroundSet}`);
        }
}

textSizeBlock.addEventListener('click', handleSizeSelection);
textColorBlock.addEventListener('click', handleColorSelection);
backgroundColorBlock.addEventListener('click', handleBackgroundSelection);
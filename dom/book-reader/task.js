const bookBlock = document.querySelector('.book');
const textSizeBlock = document.querySelector('.book__control_font-size');
const textColorBlock = document.querySelector('.book__control_color');
const backgroundColorBlock = document.querySelector('.book__control_background');

const controlAttribute = {
        /**
        / придумай архитектуру как ты
         будешь хранить и по ключу получать нужные тебе аотрибуты
         */
}



/**
 * Это динамическая функция,
 * она может работать с переданными ей аргументами
 * Она прекрасна!
 */
const handleActiveIconClassChange = (domElement, activeClass, key, classPrefix) => {
        const lineWithEnabledClass = domElement.querySelector('.' + activeClass);
        lineWithEnabledClass.classList.remove(activeClass);
        const keyValue = lineWithEnabledClass.dataset[key];
        const classSelector = `${classPrefix + keyValue}`;
        if(classSelector) {
                bookBlock.classList.remove(classSelector);
        }
}

/**
 * У нас должна быть всего ОДНА
 * функция котороая задает книги активный класс
 * все элементы в ней, она должна вычислять динамически
 */
const handleChangeActiveControlElement = (event) => {
        event.preventDefault(); // так и остается
        handleActiveIconClassChange(textSizeBlock, 'font-size_active', 'size', 'book_fs-'); // все эти параметры нужно вычислить передать динамически
        event.target.classList.add('font-size_active'); // активный класс должен быть вычислен динамически
        const dataSet = event.target.dataset.size; // ключ динамически (не size) а ключ, может быть size, textColor или bgColor или любой из тысячи!
        if (dataSet) {
                bookBlock.classList.add(`book_fs-${dataSet}`);
        }
}


/**
 * Этот код джуна удалишь потом
 */
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
const bookBlock = document.querySelector('.book');
const textSizeBlock = document.querySelector('.book__control_font-size');
const textColorBlock = document.querySelector('.book__control_color');
const backgroundColorBlock = document.querySelector('.book__control_background');
const fontWeightBlock = document.querySelector('.book__control_boldness');
const fontStyleBlock = document.querySelector('.book__control_font');

const controlAttribute = {
        size: {
                domElement: textSizeBlock,
                activeClass: 'font-size_active',
                classPrefix: 'book_fs-'
        },
        textColor: {
                domElement: textColorBlock,
                activeClass: 'color_active',
                classPrefix: 'book_color-'
        },
        bgColor: {
                domElement: backgroundColorBlock,
                activeClass: 'color_active',
                classPrefix: 'book_bg-'
        },
        fontWeight: {
                domElement: fontWeightBlock,
                activeClass: 'font-weight_active',
                classPrefix: 'font_weight-'
        },
        fontStyle: {
                domElement: fontStyleBlock,
                activeClass: 'font-style_active',
                classPrefix: 'text-size_'
        },
}

const handleActiveIconClassChange = (domElement, activeClass, key, classPrefix) => {
        const lineWithEnabledClass = domElement.querySelector('.' + activeClass);
        lineWithEnabledClass.classList.remove(activeClass);
        const keyValue = lineWithEnabledClass.dataset[key];
        const classSelector = `${classPrefix + keyValue}`;
        if(classSelector) {
                bookBlock.classList.remove(classSelector);
        }
}

const handleChangeActiveControlElement = (event, object) => {
        event.preventDefault(); // так и остается
        const targetObject = event.target.dataset;
        const keyFromArray = Object.keys(targetObject);
        let key = keyFromArray[0];
        handleActiveIconClassChange(controlAttribute[key].domElement, controlAttribute[key].activeClass, key, controlAttribute[key].classPrefix);
        event.target.classList.add(controlAttribute[key].activeClass); // активный класс должен быть вычислен динамически
        const dataSet = event.target.dataset[key];
        // ключ динамически (не size) а ключ, может быть size, textColor или bgColor или любой из тысячи!
        if (dataSet) {
                bookBlock.classList.add(`${controlAttribute[key].classPrefix + dataSet}`);
        }
}

textSizeBlock.addEventListener('click', handleChangeActiveControlElement);
textColorBlock.addEventListener('click', handleChangeActiveControlElement);
backgroundColorBlock.addEventListener('click', handleChangeActiveControlElement);
fontWeightBlock.addEventListener('click', handleChangeActiveControlElement);
fontStyleBlock.addEventListener('click', handleChangeActiveControlElement);
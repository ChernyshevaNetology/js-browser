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

const getKeyValue = (event) => {
        const targetObject = event.target.dataset;
        const keyFromArray = Object.keys(targetObject);
        return keyFromArray[0];
}

const handleChangeActiveControlElement = (event) => {
        event.preventDefault();
        const key = getKeyValue(event);
        handleActiveIconClassChange(controlAttribute[key].domElement, controlAttribute[key].activeClass, key, controlAttribute[key].classPrefix);
        event.target.classList.add(controlAttribute[key].activeClass);
        const dataSet = event.target.dataset[key];
        if (dataSet) {
                bookBlock.classList.add(`${controlAttribute[key].classPrefix + dataSet}`);
        }
}
const domElementsArray = [textSizeBlock, textColorBlock, backgroundColorBlock, fontWeightBlock, fontStyleBlock];

domElementsArray.forEach(domElem => {
        domElem.addEventListener('click', handleChangeActiveControlElement)
})

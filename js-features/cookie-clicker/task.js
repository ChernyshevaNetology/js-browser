const imgMagnifier = document.getElementById('cookie');
const textCountDown = document.getElementById('clicker__counter');

let count = 0;

const clickerIncrement = () => {
    textCountDown.textContent = ++count;
}

const imgSizeModifier = () => {
    if(count % 2 === 0) {
        imgMagnifier.style.width = '150px';
    } else {
        imgMagnifier.style.width = '200px';
    }
}

const handlerFunction = () => {
    clickerIncrement();
    imgSizeModifier();

}

imgMagnifier.addEventListener('click', handlerFunction);
const downCount = document.getElementById('timer');

let count = +downCount.textContent;

const countDown = () => {
    downCount.textContent = --count;
    if(count === 0) {
        clearInterval(timerId);
        alert('Вы победили в конкурсе!');
    }
}

const timerId = setInterval((countDown), 1000);

downCount.addEventListener('click', countDown);
const container = document.querySelector('.counters');

const renderCounterHtml = () => {
   const counter = document.createElement('div');
   counter.classList.add('counter');
   counter.textContent = '0';
   return counter;
}

for (let i = 1; i < 21; i++) {
    container.appendChild(renderCounterHtml())
}

const counters = document.querySelectorAll('.counter');

const handleIncrementCounter = (cnt) => {
    let initialCount = 0;
    return () => cnt.textContent = ++initialCount;
        }

counters.forEach((cnt) => {
    const handleCounterIncrement = handleIncrementCounter(cnt);
    cnt.addEventListener('click', () => handleCounterIncrement());

});
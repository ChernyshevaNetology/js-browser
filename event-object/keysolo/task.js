class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');

    this.reset();

    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  registerEvents() {
    /*
      TODO:
      Написать обработчик события, который откликается
      на каждый введённый символ.
      В случае правильного ввода символа вызываем this.success()
      При неправильном вводе символа - this.fail();
      DOM-элемент текущего символа находится в свойстве this.currentSymbol.
     */
  }

  success() {
    if(this.currentSymbol.classList.contains("symbol_current")) this.currentSymbol.classList.remove("symbol_current");
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;

    if (this.currentSymbol !== null) {
      this.currentSymbol.classList.add('symbol_current');
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();

    this.renderWord(word);
  }

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

new Game(document.getElementById('game'))
--------------
const countersContainer = document.querySelector('.counters');

const renderCounterHtml = (n) => {
  const counter = document.createElement('div');
  counter.classList.add('counter');
  const counterHeader = document.createElement('h5');
  counterHeader.textContent = `counter ${n+1}`;
  counter.appendChild(counterHeader);

  const counterContent = document.createElement('div');
  counterContent.classList.add('counter-content');
  counter.appendChild(counterContent);
  const counterValue = document.createElement('span');
  counterValue.classList.add('cn-value');
  counterValue.textContent = 0;
  counterContent.appendChild(counterValue);

  return counter;
}

const renderCountersOnPageLoad = (n) => {
  for (let i = 0; i < n; i++) {
    const counter = renderCounterHtml(i);
    countersContainer.appendChild(counter);
  }
}

renderCountersOnPageLoad(50);


const setCount = (htmlNode) => {
  const countVal = htmlNode.querySelector('.counter > div > span');
  let count = 0;
  return () => countVal.textContent = ++count;
}

const domNodes = document.querySelectorAll('.counter');
domNodes.forEach((node) => {
  const cnt = setCount(node);
  node.addEventListener('click', cnt);
})
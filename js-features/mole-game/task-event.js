const killedMoles = document.getElementById('dead');
const missedMoles = document.getElementById('lost');
const holes = document.querySelector('.hole-game');

let deadMoles = 0;
let missedHoles = 0;

const incrementor = (event) => {
    if (event.target.classList.contains('hole_has-mole')) {
        ++deadMoles;
        killedMoles.textContent = deadMoles;
    } else {
        ++missedHoles;
        missedMoles.textContent = missedHoles;
    }
}

const gameOver = (message) => {
    gameReset();
    alert(message);
}

const counter = () => {
    if (deadMoles === 10) {
        gameOver('Победа!');
    }
    if (missedHoles === 5) {
        gameOver('Вы проиграли!');
    }
}

const gameReset = () => {
    deadMoles = 0;
    killedMoles.textContent = deadMoles;
    missedHoles = 0;
    missedMoles.textContent = missedHoles;
}

const fnHandler = (event) => {
    incrementor(event);
    counter();
}

holes.addEventListener('click', fnHandler);














const killedMoles = document.getElementById('dead');
const missedMoles = document.getElementById('lost');
const holes = [...document.querySelectorAll('.hole')];

let deadMoles = 0;
let missedHoles = 0;

const looper = () => {
    for (let i = 0; i < holes.length; i++) {
        let currentHole = document.getElementById(`hole${i+1}`);
        currentHole.onclick = function() {
            if(currentHole.classList.contains('hole_has-mole')) {
                ++deadMoles;
                killedMoles.textContent = deadMoles;
            } else {
                ++missedHoles;
                missedMoles.textContent = missedHoles;
            }
        }
    }
}

const gameResetter = () => {
    deadMoles = 0;
    killedMoles.textContent = deadMoles;
    missedHoles = 0;
    missedMoles.textContent = missedHoles;
}

const gameOver = (message) => {
    gameResetter();
    alert(message);
}

const counter = () => {
    if(deadMoles === 10) {
        gameOver('Победа!');
    }
    if(missedHoles === 5) {
        gameOver('Вы проиграли!');
    }
}

const fnHandler = () => {
    looper();
    counter();
}

holes.forEach(item => item.addEventListener('click', fnHandler));

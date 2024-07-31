const killedMoles = document.getElementById('dead');
const missedMoles = document.getElementById('lost');
const hole1 = document.getElementById('hole1');
const hole2 = document.getElementById('hole2');
const hole3 = document.getElementById('hole3');
const hole4 = document.getElementById('hole4');
const hole5 = document.getElementById('hole5');
const hole6 = document.getElementById('hole6');
const hole7 = document.getElementById('hole7');
const hole8 = document.getElementById('hole8');
const hole9 = document.getElementById('hole9');


let deadMoles = 0;
let missedHoles = 0;

hole1.onclick = function() {
    if (hole1.classList.contains('hole_has-mole')) {
        ++deadMoles;
        killedMoles.textContent = deadMoles;
    } else {
        ++missedHoles;
        missedMoles.textContent = missedHoles;
    }
}

hole2.onclick = function() {
    if (hole2.classList.contains('hole_has-mole')) {
        ++deadMoles;
        killedMoles.textContent = deadMoles;
    } else {
        ++missedHoles;
        missedMoles.textContent = missedHoles;
    }
}

hole3.onclick = function() {
    if (hole3.classList.contains('hole_has-mole')) {
        ++deadMoles;
        killedMoles.textContent = deadMoles;
    } else {
        ++missedHoles;
        missedMoles.textContent = missedHoles;
    }
}

hole4.onclick = function() {
    if (hole4.classList.contains('hole_has-mole')) {
        ++deadMoles;
        killedMoles.textContent = deadMoles;
    } else {
        ++missedHoles;
        missedMoles.textContent = missedHoles;
    }
}

hole5.onclick = function() {
    if (hole5.classList.contains('hole_has-mole')) {
        ++deadMoles;
        killedMoles.textContent = deadMoles;
    } else {
        ++missedHoles;
        missedMoles.textContent = missedHoles;
    }
}

hole6.onclick = function() {
    if (hole6.classList.contains('hole_has-mole')) {
        ++deadMoles;
        killedMoles.textContent = deadMoles;
    } else {
        ++missedHoles;
        missedMoles.textContent = missedHoles;
    }
}

hole7.onclick = function() {
    if (hole7.classList.contains('hole_has-mole')) {
        ++deadMoles;
        killedMoles.textContent = deadMoles;
    } else {
        ++missedHoles;
        missedMoles.textContent = missedHoles;
    }
}

hole8.onclick = function() {
    if (hole8.classList.contains('hole_has-mole')) {
        ++deadMoles;
        killedMoles.textContent = deadMoles;
    } else {
        ++missedHoles;
        missedMoles.textContent = missedHoles;
    }
}

hole9.onclick = function() {
    if (hole9.classList.contains('hole_has-mole')) {
        ++deadMoles;
        killedMoles.textContent = deadMoles;
    } else {
        ++missedHoles;
        missedMoles.textContent = missedHoles;
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

hole1.addEventListener('click', counter);
hole2.addEventListener('click', counter);
hole3.addEventListener('click', counter);
hole4.addEventListener('click', counter);
hole5.addEventListener('click', counter);
hole6.addEventListener('click', counter);
hole7.addEventListener('click', counter);
hole8.addEventListener('click', counter);
hole9.addEventListener('click', counter);
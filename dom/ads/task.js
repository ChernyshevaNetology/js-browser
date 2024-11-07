const rotatorArray = [...document.querySelectorAll('.rotator .rotator__case')];
const rotatorLength = rotatorArray.length;

let currentIdx = 0;

const handleIncrementAction = () => {
    currentIdx = (currentIdx + 1) % rotatorLength;
}

const handleDeactivationStatus = () => {
    rotatorArray[currentIdx].classList.remove('rotator__case_active');
}

const handleActivationStatus = () => {
    rotatorArray[currentIdx].classList.add('rotator__case_active');
}

setInterval(() => {
    handleDeactivationStatus();
    handleIncrementAction(currentIdx);
    handleActivationStatus();
}, 1000)
ы
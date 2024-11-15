const handleDisplayNextAd = (rotator, timeOut, isActive, limit) => {
    if(!isActive) return;
    const rotatorBlock = [...document.querySelectorAll(rotator)];
    const rotatorLength = rotatorBlock.length;
    let currentIdx = 0;
    let counter = 0;
        const intervalId = setInterval(() => {
            if(counter > limit) clearInterval(intervalId);
        rotatorBlock[currentIdx].classList.remove('rotator__case_active');
        currentIdx = (currentIdx + 1) % rotatorLength;
        rotatorBlock[currentIdx].classList.add('rotator__case_active');
        counter++;
        }, timeOut)
}

handleDisplayNextAd ('.rotator .rotator__case', 1000, true, 2);
handleDisplayNextAd ('.rotator2 .rotator__case', 2000, true, 7);
handleDisplayNextAd ('.rotator3 .rotator__case', 4000, false, );
handleDisplayNextAd ('.rotator4 .rotator__case', 3000, false, );
handleDisplayNextAd ('.rotator5 .rotator__case', 500, true, 100);

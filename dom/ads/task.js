const handleDisplayNextAd = (rotator, timeOut) => {
    const rotatorBlock = [...document.querySelectorAll(rotator)];
    const rotatorLength = rotatorBlock.length;
    let currentIdx = 0;
    setInterval(() => {
        rotatorBlock[currentIdx].classList.remove('rotator__case_active');
        currentIdx = (currentIdx + 1) % rotatorLength;
        rotatorBlock[currentIdx].classList.add('rotator__case_active');
    }, timeOut)
}

handleDisplayNextAd ('.rotator .rotator__case', 1000);
handleDisplayNextAd ('.rotator2 .rotator__case', 2000);
handleDisplayNextAd ('.rotator3 .rotator__case', 4000);
handleDisplayNextAd ('.rotator4 .rotator__case', 3000);
handleDisplayNextAd ('.rotator5 .rotator__case', 500);

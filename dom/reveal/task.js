const bannerBlocks = document.querySelectorAll('.reveal');

const bannerObserver = (entries, observer) => {
    entries.forEach((banner) => {
        if(banner.target.classList.contains('reveal')) {
            banner.target.classList.add('reveal_active')
            observer.unobserve(banner.target)
        }
        })
}

const configs = {
    rootMargin: '0px',
    threshold: 0,
}

const observer = new IntersectionObserver(bannerObserver, configs);
bannerBlocks.forEach((banner) => observer.observe(banner));
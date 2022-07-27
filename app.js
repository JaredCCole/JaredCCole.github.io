// toggle mobile menu
const navLinks = document.querySelector('.nav-links');
const barsBtn = document.querySelector('#barsBtn');
const closeBtn = document.querySelector('#closeBtn');

barsBtn.addEventListener('click', ()=>{
    navLinks.style.right = '0';
})

closeBtn.addEventListener('click', ()=>{
    navLinks.style.right = '-100vw';
})


// image slider
const sliderContainer = document.querySelector('.slider-container');
const sliderSlide = document.querySelector('.slider-slide');
const sliderImages = document.querySelectorAll('.slider-slide img');

// buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

// counter
let counter = 1;
const size = sliderContainer.clientWidth;

sliderSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';


var sliderInterval;
// spaces images properly in image slider
window.onload = ()=>{
    for (let i = 0; i < sliderImages.length; i++){
        var extra = sliderSlide.clientWidth - sliderImages[i].clientWidth;
        sliderImages[i].style.marginLeft = Math.floor(extra/2) + 'px';
        sliderImages[i].style.marginRight = Math.floor(extra/2) + 'px';
    }

    // auto-moves pictures
    sliderInterval = setInterval(() => {
        if (counter >= sliderImages.length - 1) return;
        sliderSlide.style.transition = 'transform 0.4s ease-in-out';
        counter++;
        sliderSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }, 5000);
};


// button listeners
nextBtn.addEventListener('click', ()=>{
    if (counter >= sliderImages.length - 1) return;
    sliderSlide.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    sliderSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

    clearInterval(sliderInterval);
    sliderInterval = setInterval(() => {
        if (counter >= sliderImages.length - 1) return;
        sliderSlide.style.transition = 'transform 0.4s ease-in-out';
        counter++;
        sliderSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }, 5000);
})

prevBtn.addEventListener('click', ()=>{
    if (counter <= 0) return;
    sliderSlide.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    sliderSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

    clearInterval(sliderInterval);
    sliderInterval = setInterval(() => {
        if (counter >= sliderImages.length - 1) return;
        sliderSlide.style.transition = 'transform 0.4s ease-in-out';
        counter++;
        sliderSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }, 5000);
})

sliderSlide.addEventListener('transitionend', ()=>{
    if (sliderImages[counter].id === 'lastClone'){
        sliderSlide.style.transition = 'none';
        counter = sliderImages.length - 2;
        sliderSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (sliderImages[counter].id === 'firstClone'){
        sliderSlide.style.transition = 'none';
        counter = sliderImages.length - counter;
        sliderSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
})
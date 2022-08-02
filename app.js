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
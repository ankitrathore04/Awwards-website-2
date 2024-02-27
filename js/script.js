const btnEl = document.querySelector('.menu-float-btn');
const topEl = document.querySelector('.menu-float-top');
const bottomEl = document.querySelector('.menu-float-bottom');
const closeEl = document.querySelector('.close-icon')

btnEl.addEventListener('click', function() {
    topEl.classList.toggle('is-open');
    bottomEl.classList.toggle('is-open');
    btnEl.classList.toggle('is-open');
    closeEl.classList.toggle('is-open');
})

closeEl.addEventListener('click', function() {
    topEl.classList.toggle('is-open');
    bottomEl.classList.toggle('is-open');
    btnEl.classList.toggle('is-open');
    closeEl.classList.toggle('is-open');
})

const profileEl = document.querySelector('.about-img');
const dropdownEl = document.querySelector('.profile-dropdown');

profileEl.addEventListener('click', function (){
    dropdownEl.classList.toggle('is-active');
})
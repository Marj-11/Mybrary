function changeToBlue() {
    document.documentElement.style.setProperty('--color-base-hue', 200);
}

function changeToGreen() {
    document.documentElement.style.setProperty('--color-base-hue', 100);
}

function changeToPurpule() {
    document.documentElement.style.setProperty('--color-base-hue', 300);
}

function changeToMaroon() {
    document.documentElement.style.setProperty('--color-base-hue', 0);
}

var btnBlue = document.querySelector('.blue');
btnBlue.addEventListener('click', changeToBlue);

var btnGreen = document.querySelector('.green');
btnGreen.addEventListener('click', changeToGreen);

var btnPurpule = document.querySelector('.purpule');
btnPurpule.addEventListener('click', changeToPurpule);

var btnMaroon = document.querySelector('.maroon');
btnMaroon.addEventListener('click', changeToMaroon);
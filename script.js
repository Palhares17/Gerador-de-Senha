let sliderElement = document.querySelector('#slider');
let btn = document.querySelector('#btn');

let sizePass =   document.querySelector('#size');
let password = document.querySelector('#password');

let container = document.querySelector('#container-password');

let charset = 'qwertyuiopasdfghjklzxcvbnm!@#$%&QWERTYUIPASDFGHJKLZXCVBNM7418520963';
let newPass = '';

sizePass.innerHTML = sliderElement.value;

slider.oninput = function() {
    sizePass.innerHTML = this.value;
} 

function generate() {
    let pass = '';
    for(let i = 0, n = charset.length; i < sizePass.innerHTML; i++) {
        pass += charset.charAt(Math.floor(Math.random() * n));
    }
    
    container.classList.remove('hide');
    password.innerHTML = pass;
    newPass = pass;
}

function copy() {
    navigator.clipboard.writeText(newPass);
}
const passwordBox = document.getElementById('password');
const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const specialCharacter = "@#$%^&()_+|}{[]></-=";

const allChar = upperCase + lowerCase + numbers + specialCharacter;

function createPassword(){
    let passowrd = "";
    passowrd += upperCase[Math.floor(Math.random() * upperCase.length)];
    passowrd += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    passowrd += numbers[Math.floor(Math.random() * numbers.length)];
    passowrd += specialCharacter[Math.floor(Math.random() * specialCharacter.length)];
    
    while(length > passowrd.length){
        passowrd += allChar[Math.floor(Math.random() * allChar.length)];
    }
    passwordBox.value = passowrd;
}

function copyPassword(){
    passwordBox.select();
    alert("password is copied");
    document.execCommand("copy");
}
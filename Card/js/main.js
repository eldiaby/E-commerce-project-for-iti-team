function userNameValidation (userInput) {
    let namevalidation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return userInput.match(namevalidation);
}
function emailOrPhoneValidation (userInput) {
    let emailValidationRG =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    /*return userInput.match(emailValidationRG);*/
    return emailValidationRG.test(userInput)
}
function passWordValidation (userInput) {
    let passWordValidation =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return userInput.match(passWordValidation);
}




let userName = document.getElementsByName("userName");
let emailOrPhone = document.getElementsByName("email");
let passWord = document.getElementsByName("password");
let form = document.getElementById("vadidation-form");
console.log(form.target);

userName.onmouseleave = function () {

}

console.log(emailOrPhoneValidation(emailOrPhone.values) === false);

form.onsubmit = function () {
    if ( emailOrPhoneValidation(emailOrPhone.values) === false) {
    return false
    }
    return true ;
}





















/*
console.log(userName[0].type);
console.log(emailOrPhone[0].type);
console.log(passWord[0].type);*/
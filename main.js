
const mailformat = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
const alert = document.querySelector('#alert-text');
const btn = document.querySelector('#btn-signup');


function validateEmail(){ 
    const mail = document.querySelector('#email');

    if(mail.value.match(mailformat)){
        alert.innerHTML = "You have been added to our list!";
        mail.style.backgroundImage = "none";
        alert.style.color = "dark-gray";
    }

    else {
        alert.innerHTML = `<div id="alert-text">Please provide a valid email address!</div>`
        alert.style.color = "rgb(249,98,98)";
        mail.style.backgroundImage = "url(./images/icon-error.svg)";
        mail.style.border = "1px solid rgb(249,98,98)";
        return false;
    }
    return true;
}


btn.addEventListener('click', validateEmail);
    

    


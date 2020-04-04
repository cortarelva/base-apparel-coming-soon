

let btn = document.querySelector('#btn-signup');






function validateEmail(){ 
    let mail = document.emailForm.email;
    let mailformat = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/); 
    let alert = document.querySelector('#alert-text');
    

    if (mail.value.match(mailformat)){
        alert.innerHTML = "You have been added to our list!";
        mail.style.backgroundImage = "none";
    }
    else if(mail.value.match("")){
        alert.innerHTML = "Please enter your email!"
        mail.style.backgroundImage = "url(./images/icon-error.svg)";
        mail.style.borderColor = "$soft-red";
    }
    else{
        alert.innerHTML = "You have entered an invalid email address!";
        mail.style.backgroundImage = "url(./images/icon-error.svg)";
        mail.style.borderColor = "$soft-red";
    }
}



btn.addEventListener('click', validateEmail());
    


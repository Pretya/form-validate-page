  
function validate() {

  //! Email ============================
  const emailValue = document.getElementById('email').value;
  const emailInfo = document.getElementById('info-email');
  const indicatorEmail = document.getElementById('indicator-email');
  const patternEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  
    if (validateEmail(emailValue, patternEmail)) {
        indicatorEmail.classList.add('valide');
        indicatorEmail.classList.remove('unvalide');
        emailInfo.innerHTML = `<p>link to get function</p> <a href="https://pretya.github.io/library-validations/libaryValidations.js" target="_blank">https://pretya.github.io/library-validations/libaryValidations.js</a>`
      } else {
        indicatorEmail.classList.add('unvalide');
        indicatorEmail.classList.remove('valide')
        emailInfo.innerHTML = `Should look like this "info@support.com"`
      }
    if(emailValue == "") {
      indicatorEmail.classList.remove('unvalide');
      indicatorEmail.classList.remove('valide');
      emailInfo.innerHTML = `<--- Pleas enter your email`
    }

  //! Login =============================
  const loginValue = document.getElementById('login').value;
  const loginInfo = document.getElementById('info-login');
  const indicatorName = document.getElementById('indicator-login');
  const patternLogin = /[a-zA-Z0-9]+/;
  const minLength = 6;
  const maxLength = 12;

    if(validateLogin(loginValue, patternLogin, minLength, maxLength)) {
        indicatorName.classList.add('valide');
        indicatorName.classList.remove('unvalide');
        loginInfo.innerHTML = `<p>link to get function </p> <a href="https://pretya.github.io/library-validations/libaryValidations.js" target="_blank">https://pretya.github.io/library-validations/libaryValidations.js</a>`
      } else {
        indicatorName.classList.remove('valide');
        indicatorName.classList.add('unvalide');
        loginInfo.innerHTML = `min 6 max 12 letters`
      }
    if(loginValue == "") {
      indicatorName.classList.remove('unvalide');
      indicatorName.classList.remove('valide');
      loginInfo.innerHTML = `<--- Pleas enter your login`
    } 

  //! Password ===========================
  const passwordValue = document.getElementById('password').value;
  const patternPassword = /^(?=.*\d)\w{3,20}$/m;
  const indicatorPassword = document.getElementById('indicator-password');
  const loginPassword = document.getElementById('info-password');

    if(validatePassword(passwordValue, patternPassword)) {
        indicatorPassword.classList.add('valide');
        indicatorPassword.classList.remove('unvalide');
        loginPassword.innerHTML = `<p>link to get function</p> <a href="https://pretya.github.io/library-validations/libaryValidations.js" target="_blank">https://pretya.github.io/library-validations/libaryValidations.js</a>`
      } else {
        indicatorPassword.classList.remove('valide');
        indicatorPassword.classList.add('unvalide');
        loginPassword.innerHTML = `Must contain Latin + numbers (minimum 1 digit)`
      }
    if(passwordValue == "") {
      indicatorPassword.classList.remove('valide');
      indicatorPassword.classList.remove('unvalide');
      loginPassword.innerHTML = `<--- Pleas enter your password`
    }
}




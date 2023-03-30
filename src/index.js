
import {validateEmail, validateLogin, validatePassword} from 'sy-validator';

  //! ES6 ==============
  class Input {
  constructor(options) {
    this.domInput = options.domInput
    this.inputValue = options.inputValue
    this.inputInfo = options.inputInfo
    this.minLength = options.minLength
    this.maxLength = options.maxLength
    this.inputState = options.inputState
    this.inputPattern = options.inputPattern

    this.domInput = options.domInput
    this.value = this.domInput.value;
  }

  isEmpty() {
    return this.value === '';
  }

  setValue(newValue) {
    this.domInput.value = newValue;
    this.value = newValue;
  }

  isPhone() {
    const phoneRegex = /^\+?\d{10,15}$/;
    return phoneRegex.test(this.value);
  }

  updateInputState(isValid, emptyMessage, validMessage) {
    if (isValid) {
      this.inputState.classList.add('valide');
      this.inputState.classList.remove('unvalide');
      this.inputInfo.innerHTML = `<p>link to get function </p> <a href="https://pretya.github.io/library-validations/libaryValidations.js" target="_blank">https://pretya.github.io/library-validations/libaryValidations.js</a>`;
    } else {
      this.inputState.classList.remove('valide');
      this.inputState.classList.add('unvalide');
      this.inputInfo.innerHTML = this.inputValue.value ? validMessage : emptyMessage;
    }
  }

  validateLogin() {
    this.domInput.addEventListener('keyup', () => {
      const isValid = validateLogin(this.inputValue.value, this.inputPattern, this.minLength, this.maxLength);
      this.updateInputState(isValid, `<--- Pleas enter your login`, `min ${this.minLength} max ${this.maxLength} letters`);
    });
  }
  
  validateEmail() {
    this.domInput.addEventListener('keyup', () => {
      const isValid = validateEmail(this.inputValue.value, this.inputPattern);
      this.updateInputState(isValid, `<--- Pleas enter your email`, `Should look like this "info@support.com"`);
    });
  }
  
  validatePassword() {
    this.domInput.addEventListener('keyup', () => {
      const isValid = validatePassword(this.inputValue.value, this.inputPattern);
      this.updateInputState(isValid, `<--- Pleas enter your password`, `Must contain Latin + numbers (minimum 1 digit)`);
    });
  }
}

const loginES6 = new Input({
  domInput: document.getElementById('login'), 
  inputValue: document.getElementById('login'), 
  inputInfo: document.getElementById('info-login'), 
  inputPattern: /[a-zA-Z0-9]+/, 
  minLength: 6, 
  maxLength: 12, 
  inputState: document.getElementById('indicator-login'),
})

const emailES6 = new Input({
  domInput: document.getElementById('email'), 
  inputValue: document.getElementById('email'), 
  inputInfo: document.getElementById('info-email'), 
  inputPattern: /^[^ ]+@[^ ]+\.[a-z]{2,3}$/, 
  inputState: document.getElementById('indicator-email'), 
})

const passwordES6 = new Input({
  domInput: document.getElementById('password'), 
  inputValue: document.getElementById('password'), 
  inputInfo: document.getElementById('info-password'), 
  inputPattern: /^(?=.*\d)\w{3,20}$/m, 
  inputState: document.getElementById('indicator-password'),
})

loginES6.validateLogin()
emailES6.validateEmail()
passwordES6.validatePassword()

const field = new Input({domInput: document.getElementById('login')});

// ! ES5 ===============

//   function InputField(options) {
//         this.domInput = options.domInput
//         this.inputValue = options.inputValue
//         this.inputInfo = options.inputInfo
//         this.minLength = options.minLength
//         this.maxLength = options.maxLength
//         this.inputState = options.inputState
//         this.inputPattern = options.inputPattern
//   }

//   InputField.prototype.isValidateLogin = function() {
//     this.domInput.addEventListener('keyup', () => {
//       if(validateLogin(this.inputValue.value, this.inputPattern, this.minLength, this.maxLength)) {
//         this.inputState.classList.add('valide')
//         this.inputState.classList.remove('unvalide')
//         this.inputInfo.innerHTML = `<p>link to get function </p> <a href="https://pretya.github.io/library-validations/libaryValidations.js" target="_blank">https://pretya.github.io/library-validations/libaryValidations.js</a>`
//       } else {
//         this.inputState.classList.remove('valide')
//         this.inputState.classList.add('unvalide')
//         this.inputInfo.innerHTML = `min ${this.minLength} max ${this.maxLength} letters`
//       }
//       if(this.inputValue.value == '') {
//         this.inputState.classList.remove('unvalide')
//         this.inputState.classList.remove('valide')
//         this.inputInfo.innerHTML = `<--- Pleas enter your login`
//       }
//     })
//   }
//   InputField.prototype.isValidateEmail = function() {
//   this.domInput.addEventListener('keyup', () => {
//     if(validateEmail(this.inputValue.value, this.inputPattern,)) {
//       this.inputState.classList.add('valide')
//       this.inputState.classList.remove('unvalide')
//       this.inputInfo.innerHTML = `<p>link to get function </p> <a href="https://pretya.github.io/library-validations/libaryValidations.js" target="_blank">https://pretya.github.io/library-validations/libaryValidations.js</a>`
//     } else {
//       this.inputState.classList.remove('valide')
//       this.inputState.classList.add('unvalide')
//       this.inputInfo.innerHTML = `Should look like this "info@support.com"`
//     }
//     if(this.inputValue.value == '') {
//       this.inputState.classList.remove('unvalide')
//       this.inputState.classList.remove('valide')
//       this.inputInfo.innerHTML = `<--- Pleas enter your email`
//     }
//   })
//   }
//   InputField.prototype.isValidatePassword = function() {
//   this.domInput.addEventListener('keyup', () => {
//     if(validatePassword(this.inputValue.value, this.inputPattern,)) {
//       this.inputState.classList.add('valide')
//       this.inputState.classList.remove('unvalide')
//       this.inputInfo.innerHTML = `<p>link to get function </p> <a href="https://pretya.github.io/library-validations/libaryValidations.js" target="_blank">https://pretya.github.io/library-validations/libaryValidations.js</a>`
//     } else {
//       this.inputState.classList.remove('valide')
//       this.inputState.classList.add('unvalide')
//       this.inputInfo.innerHTML = `Must contain Latin + numbers (minimum 1 digit)`
//     }
//     if(this.inputValue.value == '') {
//       this.inputState.classList.remove('unvalide')
//       this.inputState.classList.remove('valide')
//       this.inputInfo.innerHTML = `<--- Pleas enter your login`
//     }
//   })
//   }
//   const loginES5 = new InputField({
//     domInput: document.getElementById('login'), 
//     inputValue: document.getElementById('login'), 
//     inputInfo: document.getElementById('info-login'), 
//     inputPattern: /[a-zA-Z0-9]+/, 
//     minLength: 6, 
//     maxLength: 12, 
//     inputState: document.getElementById('indicator-login'), 
//   })
//   const emailES5 = new InputField({
//     domInput: document.getElementById('email'), 
//     inputValue: document.getElementById('email'), 
//     inputInfo: document.getElementById('info-email'), 
//     inputPattern: /^[^ ]+@[^ ]+\.[a-z]{2,3}$/, 
//     inputState: document.getElementById('indicator-email'), 
//   })
//   const passwordES5 = new InputField({
//     domInput: document.getElementById('password'), 
//     inputValue: document.getElementById('password'), 
//     inputInfo: document.getElementById('info-password'), 
//     inputPattern: /^(?=.*\d)\w{3,20}$/m, 
//     inputState: document.getElementById('indicator-password'), 
//   })

//   loginES5.isValidateLogin()
//   emailES5.isValidateEmail()
//   passwordES5.isValidatePassword()

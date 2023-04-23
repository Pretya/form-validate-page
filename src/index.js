
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
  }

  isEmpty() {
    return this.inputValue.value === '';
  }

  setValue(newValue) {
    this.domInput.value = newValue;
  }

  isPhone() {
    this.domInput.addEventListener('keyup', () => {
      const isValid = this.inputPattern.test(this.inputValue.value);
      this.updateInputState(isValid, `<--- Please enter your phone number`, `Should contain 10 to 15 digits`);
   });
  }

  updateInputState(isValid, emptyMessage, validMessage) {
    if (isValid) {
      this.inputState.classList.add('valide');
      this.inputState.classList.remove('unvalide');
      this.inputInfo.innerHTML = `<p>link to get function </p> <a href="https://www.npmjs.com/package/sy-validator" target="_blank">https://www.npmjs.com/package/sy-validator</a>`;
    } else {
      this.inputState.classList.remove('valide');
      this.inputState.classList.add('unvalide');
      this.inputInfo.innerHTML = this.inputValue.value ? validMessage : emptyMessage;
    }
    if (this.inputValue.value === '') {
      this.inputState.classList.remove('valide');
      this.inputState.classList.remove('unvalide');
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

const field = new Input({
  domInput: document.getElementById('phone'),
  inputValue: document.getElementById('phone'), 
  inputInfo: document.getElementById('info-phone'),
  inputState: document.getElementById('indicator-phone'),
  inputPattern: /^\+?\d{10,15}$/,
});

loginES6.validateLogin()
emailES6.validateEmail()
passwordES6.validatePassword()
// field.setValue('')
field.isPhone()


// !ES5

// function Input(options) {
//   this.domInput = options.domInput;
//   this.inputValue = options.inputValue;
//   this.inputInfo = options.inputInfo;
//   this.minLength = options.minLength;
//   this.maxLength = options.maxLength;
//   this.inputState = options.inputState;
//   this.inputPattern = options.inputPattern;
// }

// Input.prototype.isEmpty = function () {
//   return this.inputValue.value === '';
// };

// Input.prototype.setValue = function (newValue) {
//   this.domInput.value = newValue;
// };

// Input.prototype.isPhone = function () {
//   const that = this;
//   this.domInput.addEventListener('keyup', function () {
//     const isValid = that.inputPattern.test(that.inputValue.value);
//     that.updateInputState(isValid, `<--- Please enter your phone number`, `Should contain 10 to 15 digits`);
//   });
// };

// Input.prototype.updateInputState = function (isValid, emptyMessage, validMessage) {
//   if (isValid) {
//     this.inputState.classList.add('valide');
//     this.inputState.classList.remove('unvalide');
//     this.inputInfo.innerHTML = `<p>link to get function </p> <a href="https://www.npmjs.com/package/sy-validator" target="_blank">https://www.npmjs.com/package/sy-validator</a>`;
//   } else {
//     this.inputState.classList.remove('valide');
//     this.inputState.classList.add('unvalide');
//     this.inputInfo.innerHTML = this.inputValue.value ? validMessage : emptyMessage;
//   }
//   if (this.inputValue.value === '') {
//     this.inputState.classList.remove('valide');
//     this.inputState.classList.remove('unvalide');
//   }
// };

// Input.prototype.validateLogin = function () {
//   const that = this;
//   this.domInput.addEventListener('keyup', function () {
//     const isValid = validateLogin(that.inputValue.value, that.inputPattern, that.minLength, that.maxLength);
//     that.updateInputState(isValid, `<--- Pleas enter your login`, `min ${that.minLength} max ${that.maxLength} letters`);
//   });
// };

// Input.prototype.validateEmail = function () {
//   const that = this;
//   this.domInput.addEventListener('keyup', function () {
//     const isValid = validateEmail(that.inputValue.value, that.inputPattern);
//     that.updateInputState(isValid, `<--- Pleas enter your email`, `Should look like this "info@support.com"`);
//   });
// };

// Input.prototype.validatePassword = function () {
//   const that = this;
//   this.domInput.addEventListener('keyup', function () {
//     const isValid = validatePassword(that.inputValue.value, that.inputPattern);
//     that.updateInputState(isValid, `<--- Pleas enter your password`, `Must contain Latin + numbers (minimum 1 digit)`);
//   });
// };

// const loginES5 = new Input({
//   domInput: document.getElementById('login'), 
//   inputValue: document.getElementById('login'), 
//   inputInfo: document.getElementById('info-login'), 
//   inputPattern: /[a-zA-Z0-9]+/, 
//   minLength: 6, 
//   maxLength: 12, 
//   inputState: document.getElementById('indicator-login'),
// });

// const emailES5 = new Input({
//   domInput: document.getElementById('email'), 
//   inputValue: document.getElementById('email'), 
//   inputInfo: document.getElementById('info-email'), 
//   inputPattern: /^[^ ]+@[^ ]+\.[a-z]{2,3}$/, 
//   inputState: document.getElementById('indicator-email'), 
// });

// const passwordES5 = new Input({
//   domInput: document.getElementById('password'), 
//   inputValue: document.getElementById('password'), 
//   inputInfo: document.getElementById('info-password'), 
//   inputPattern: /^(?=.*\d)\w{3,20}$/m, 
//   inputState: document.getElementById('indicator-password'),
// });

// const fieldES5 = new Input({
//   domInput: document.getElementById('phone'),
//   inputValue: document.getElementById('phone'), 
//   inputInfo: document.getElementById('info-phone'),
//   inputState: document.getElementById('indicator-phone'),
//   inputPattern: /^\+?\d{10,15}$/,
// });

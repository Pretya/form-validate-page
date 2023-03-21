
function validateEmail(emailValue, pattern) {
  if(emailValue.match(pattern)) {
    return true
  } else {
    return false
  }
}

function validateLogin(loginValue, pattern, minLength, maxLength) {
  if(loginValue.length < minLength || loginValue.length > maxLength) {
    return false;
  } else if(!loginValue.match(pattern) == true) {
    return false;
  } else {
    return true;
  }
}
function validatePassword(passwordValue, pattern) {
  if(pattern.test(passwordValue)) {
    return true;
  } else {
    return false;
  }
}


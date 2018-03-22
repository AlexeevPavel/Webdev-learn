function checkValidEmail() {
  var email = document.getElementsByClassName("email-reg")[0].value;
  var result = email.match(/^[0-9a-z-\.]+\@[0-9a-z-]{1,}\.[a-z]{2,}$/i);
  if (!result) {
    return false;
  }
  return true;
}

function checkPasswords() {
  var pass = document.getElementsByClassName("password-reg")[0].value;
  var passConfirm = document.getElementsByClassName("password-reg-repeat")[0].value;
  if ((pass.length < 6) || (pass != passConfirm)) {
    return false;
  }
  return true;
}

function checkRules() {
  var result = document.getElementsByClassName("check-reg")[0].checked;
  if (!result) {
    return false;
  }
  return true;
}
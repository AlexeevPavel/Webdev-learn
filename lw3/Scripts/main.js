function checkValidEmail() {
  var email = document.getElementsByClassName("email-reg")[0].value;
  var result = email.match(/^[0-9a-z-\.]+\@[0-9a-z-]{1,}\.[a-z]{2,}$/i);
  if (!result) {
    return false;
  }
  return true;
}
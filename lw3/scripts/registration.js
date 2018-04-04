function checkValidEmail() {
  var email = $(".email-reg").val();
  var result = email.match(/^[0-9a-z-\.]+\@[0-9a-z-]{1,}\.[a-z]{2,}$/i);
  if (!result) {
    return false;
  }
  return true;
}

function checkPasswords() {
  var pass = $(".password-reg").val();
  var passConfirm = $(".password-reg-repeat").val();
  if ((pass.length < 6) || (pass != passConfirm)) {
    return false;
  }
  return true;
}

function checkRules() {
  var result = $(".check-reg").prop("checked");
  if (!result) {
    return false;
  }
  return true;
}

document.getElementsByClassName("registration")[0].onsubmit = function () {
  if (checkValidEmail() && checkPasswords() && checkRules()) {
    alert("Регистрация завершена");
  } else {
    if (!checkValidEmail()) {
      alert('E-Mail введен неправильно (example@example.example)');
    } else if (!checkPasswords()) {
      alert('Пароли должны быть неменее 6-ти символов и совпадать.');
    } else {
      alert('Примите условия соглашения.');
    }
    return false;
  }
};
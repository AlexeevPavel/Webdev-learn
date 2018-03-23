$(document).ready(function () {
  $('.registration').submit(function (event) {
    event.preventDefault();
    var email = $(".email-reg").val();
    var pass = $(".password-reg").val();
    var passConfirm = $(".password-reg-repeat").val();
    var checkbox = $(".check-reg").prop("checked");
    var result = (/[^\s@]+@[^\s@]+\.[^\s@]+/.test(email));
  });
});
function checkForm(){
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  if (username === '' || password === '' || username === 'Username' || password === 'Password') {
    alert('NO NO NO!');
    return false;
  }
}

document.getElementById("login-button").addEventListener("click", function() {
  checkForm();
});

document.getElementById("register-button").addEventListener("click", function() {
  alert("Button clicked!");
});

document.getElementById("forgot-password-button").addEventListener("click", function() {
  alert("Button clicked!");
});
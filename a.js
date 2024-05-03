// script.js

function checkInput() {
  const username = document.querySelector('input[name="username"]').value;
  const password = document.querySelector('input[name="password"]').value;
  const loginButton = document.querySelector('input[name="login"]');
  
  if (username.trim() !== '' && password.trim() !== '') {
    loginButton.disabled = false;
    loginButton.classList.add('active'); // 'active' class'ını ekle
  } else {
    loginButton.disabled = true;
    loginButton.classList.remove('active'); // 'active' class'ını kaldır
  }
}

function submitForm(event) {
  event.preventDefault();

  const username = document.querySelector('input[name="username"]').value;
  const password = document.querySelector('input[name="password"]').value;

}

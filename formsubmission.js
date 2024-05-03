function submitForm(event) {
  event.preventDefault();

  const username = document.querySelector('input[name="username"]').value;
  const password = document.querySelector('input[name="password"]').value;
  
  if (username === 'example' && password === 'password') {
    // Başarılı login durumunda yönlendirme
    window.location.href = "login_granted.html";
  } else {

    alert("Invalid username or password");
  }
}

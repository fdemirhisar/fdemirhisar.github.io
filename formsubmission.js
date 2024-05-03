function submitForm(event) {
  event.preventDefault();

  const username = document.querySelector('input[name="username"]').value;
  const password = document.querySelector('input[name="password"]').value;

  // Simülasyon amaçlı olarak başarılı login olduğunu varsayalım
  // Gerçek uygulamada sunucu tarafında kontrol yapılmalı
  if (username === 'example' && password === 'password') {
    // Başarılı login durumunda yönlendirme
    window.location.href = "login_granted.html";
  } else {
    // Başarısız giriş durumunda uyarı verebiliriz
    alert("Invalid username or password");
  }
}

// server.js

const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch'); // fetch API'si kullanmak için

const app = express();
const PORT = process.env.PORT || 3000;

// Body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Ana sayfa
app.get('/', (req, res) => {
  res.send('Sunucu çalışıyor');
});

// Instagram API'sına istek gönderme endpoint'i
app.post('/verify', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Instagram API'sına istek göndermek için gerekli kod burada olacak
    
    const response = await fetch('https://api.instagram.com/verify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    });

    // API'dan gelen yanıtı alınabilir
    const data = await response.json();

    // Kullanıcı kimliğinin doğrulanması başarılı ise işlem yapabiliriz
  
    res.send({ success: true, message: 'Kullanıcı kimliği doğrulandı' });
  } catch (error) {
    console.error('Hata:', error);
    res.status(500).send({ success: false, message: 'Sunucu hatası' });
  }
});

// Sunucuyu dinleme
app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda çalışıyor`);
});

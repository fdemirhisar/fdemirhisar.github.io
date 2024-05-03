// server.js

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Login endpoint
app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  //  API göndermek üzere username ve password.


});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

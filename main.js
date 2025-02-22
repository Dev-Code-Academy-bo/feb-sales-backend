const express = require('express')
const app = express()

const port = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send('Hello World')
});

app.get('/api/login', function (req, res) {
  res.send('Welcome to login!!!')
});

app.get('/api/user', function (req, res) {
  res.send('Welcome to user!!!')
});

app.get('/api/product', function (req, res) {
  res.send('Welcome to product!!!')
});

app.get('/api/client', function (req, res) {
  res.send('Welcome to client!!!')
});

app.get('/api/sale', function (req, res) {
  res.send('Welcome to sale!!!')
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

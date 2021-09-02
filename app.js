const express = require('express');
const ejs = require('ejs');

const app = express();
//Template Engine
app.set('view engine', 'ejs');
const path = require('path');
//MIDDLEWARES
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//ROUTES
app.get('/', (req, res) => {
  // res.sendFile(path.resolve(__dirname, 'temp/index.html'));

  res.render('index');
});
app.get('/about', (req, res) => {
  // res.sendFile(path.resolve(__dirname, 'temp/index.html'));

  res.render('about');
});

app.get('/add', (req, res) => {
  // res.sendFile(path.resolve(__dirname, 'temp/index.html'));

  res.render('add');
});

app.post('/photos', (req, res) => {
  // res.sendFile(path.resolve(__dirname, 'temp/index.html'));

  console.log(req.body);
  res.redirect("/");
});
const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı..`);
});

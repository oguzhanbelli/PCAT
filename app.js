const express = require('express');

const fileUpload = require('express-fileupload');
const mongoose = require('mongoose');
const ejs = require('ejs');
const methodOverride = require('method-override');

const app = express();

const photoController = require('./controllers/photoControllers');
const pageController = require('./controllers/pageControllers');

//connect DB
mongoose.connect('mongodb://localhost/pcat-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Template Engine
app.set('view engine', 'ejs');

//MIDDLEWARES
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(fileUpload());
app.use(
  methodOverride('_method', {
    methods: ['GET', 'POST'],
  })
);

//ROUTES

app.get('/about', pageController.getAboutPage);

app.get('/add', pageController.getAddPage);
app.get('/photos/edit/:id', pageController.getEditPage);

app.get('/', photoController.getAllPhotos);
app.post('/photos', photoController.createPhoto);

app.get('/photos/:id', photoController.getPhoto);

app.put('/photos/:id', photoController.updatePhoto);

app.delete('/photos/:id', photoController.deletePhoto);

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı..`);
});


const fs = require('fs');
const Photo = require('../models/Photo');
exports.getAllPhotos = async (req, res) => {
  // res.sendFile(path.resolve(__dirname, 'temp/index.html'));
  const photos = await Photo.find({}).sort('-createdDate');

  res.render('index', {
    photos,
  });
};

exports.getPhoto = async (req, res) => {
  // res.sendFile(path.resolve(__dirname, 'temp/index.html'));
  const photo = await Photo.findById(req.params.id);

  res.render('photo', {
    photo,
  });
};

exports.createPhoto = async (req, res) => {
  // res.sendFile(path.resolve(__dirname, 'temp/index.html'));
  // console.log(req.files.image);
  // await Photo.create(req.body);
  // res.redirect('/');

  const uploadDir = 'public/uploads';

  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
  }

  let uploadedImage = req.files.image;
  let uploadPath = __dirname + '/../public/uploads/' + uploadedImage.name;

  uploadedImage.mv(uploadPath, async () => {
    console.log(uploadedImage);
    await Photo.create({
      ...req.body,
      image: '/uploads/' + uploadedImage.name,
    });

    res.redirect('/');
  });
};

exports.updatePhoto = async (req, res) => {
  const photo = await Photo.findOne({ _id: req.params.id });
  photo.title = req.body.title;
  photo.description = req.body.description;
  photo.save();

  res.redirect(`/photos/${req.params.id}`);
};

exports.deletePhoto = async (req, res) => {
  const photo = await Photo.findOne({ _id: req.params.id });

  let deletedImage = __dirname + '/../public' + photo.image;

  fs.unlinkSync(deletedImage);

  await Photo.findByIdAndRemove(req.params.id);

  res.redirect('/');
};
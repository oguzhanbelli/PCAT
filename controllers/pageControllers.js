
const Photo = require('../models/Photo');

exports.getAboutPage = (req, res) => {
  // res.sendFile(path.resolve(__dirname, 'temp/index.html'));

  res.render('about');
};

exports.getAddPage = (req, res) => {
  // res.sendFile(path.resolve(__dirname, 'temp/index.html'));

  res.render('add');
};

exports.getEditPage = async (req, res) => {
  // res.sendFile(path.resolve(__dirname, 'temp/index.html'));
  const photo = await Photo.findById(req.params.id);

  res.render('edit', {
    photo,
  });
};

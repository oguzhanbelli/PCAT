const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//connect DB
mongoose.connect('mongodb://localhost/pcat-test-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

//create Schema

const PhotoSchema = new Schema({
  title: String,
  description: String,
});

const Photo = mongoose.model('Photo', PhotoSchema);

// CREATE A PHOTO

// Photo.create({ title: 'Photo Title 1', description: 'Photo description 1' });

// READ A PHOTO

// Photo.find({}, (data, err) => {
//   if (err) console.log(err);

//   console.log(data);
// });

//UPDATE A PHOTO
// const id = '613118d7ae21cad807166dec';

// Photo.findByIdAndUpdate(
//   id,
//   {
//     title: 'Photo 2 Title Updated New',
//     description: 'Photo 2 Description Updated new',
//   },
//   {
//     new: true,
//   },
//   (data, err) => {
//     if (err) console.log(err);
//     console.log(data);
//   }
// );

const id = '613118d7ae21cad807166ded';

Photo.findByIdAndDelete(id, (data, err) => {
 if(err) console.log(err);
 console.log(`Photo removed`);
});

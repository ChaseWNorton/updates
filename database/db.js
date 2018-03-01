const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/updates');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('MONGO GOD');
});

const postSchema = mongoose.Schema({
  projectId: Number,
  posts: Array,
  founded: Date,
});

const postModel = mongoose.model('Post', postSchema);

const insertOne = post => {
    let insertPost = new postModel(post);
    insertPost.save();
  };

  const insertMany = posts => {
    posts.forEach(ele => {
      insertOne(ele)
    })
  };

  const findOne = obj => {
    return postModel.findOne(obj);
  }

  module.exports.insertOne = insertOne;
  module.exports.insertMany = insertMany;
  module.exports.findOne = findOne;



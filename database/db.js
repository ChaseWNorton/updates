const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/updates');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('MONGO GOD2');
});

const postSchema = mongoose.Schema({
  projectId: Number,
  posts: Array,
  founded: String,
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

  const find = obj => {
    return postModel.find(obj);
  }

  module.exports.insertOne = insertOne;
  module.exports.insertMany = insertMany;
  module.exports.find = find;



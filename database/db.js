const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/updates');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('MONGO GOD2');
});

const projectSchema =  mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  projectId: Number,
  founded: String,
  posts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}],
});

const postSchema = mongoose.Schema({
  _id : mongoose.Schema.Types.ObjectId,
  project: {type: mongoose.Schema.Types.ObjectId, ref: 'Project'},
  postId: Number,
  postNum: Number,
  article: String,
  summary: String,
  date: String,
  title: String,
  likes: Number,
  comments: Array,
  images: Array,
});

const Project = mongoose.model('Project', projectSchema);
const Post = mongoose.model('Post', postSchema);


const insertProject = project => {
    let insertProject = new Project(project);
    return insertProject.save();
  };

const insertPost = post => {
  let insertPost = new Post(post);
  return insertPost.save();
}

  const insertMany = posts => {
    posts.forEach(ele => {
      insertProject(ele)
    })
  };

  const findProject = obj => {
    return Project.findOne(obj)
  };

  const findPost = obj => {
    return Post.findOne(obj)
  }

  module.exports.insertProject = insertProject;
  module.exports.insertMany = insertMany;
  module.exports.findProject = findProject;
  module.exports.insertPost = insertPost;
  module.exports.findPost = findPost;



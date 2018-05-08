const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/updates');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Database Connection Open');
});

const projectSchema =  mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  projectId: Number,
  totalPosts: Number,
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
  };

  const findPostAndUpdate = (query, update) => {
    let input = {postId: query};
    Post.findOneAndUpdate(input, {$set: {likes: update.likes}}, (thing) => console.log(thing))
  };

  module.exports.insertProject = insertProject;
  module.exports.insertMany = insertMany;
  module.exports.findProject = findProject;
  module.exports.insertPost = insertPost;
  module.exports.findPost = findPost;
  module.exports.findPostAndUpdate = findPostAndUpdate;



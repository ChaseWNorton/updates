const fake = require('faker');
const mongoose = require('mongoose');
const moment = require('moment');
mongoose.connect('mongodb://localhost/updates');


const postSchema = mongoose.Schema({
  projectId: Number,
  posts: Array,
  founded: String,
});

const post = mongoose.model('Post', postSchema);


let fakeData = [];
for (let i=0; i < 200; i++) {
  let project = {
    projectId: i,
    posts: [],
    founded: `${moment(fake.date.past()).format("dddd, MMMM Do")}`,
  };
  for (let j=0; j< 4;j++ ) {
    project.posts.push({
      postId: Number(`${i}${j}`),
      article: fake.lorem.paragraphs(),
      date: moment(fake.date.recent()).format("dddd, MMMM Do"),
      title: fake.lorem.words(),
    });
  }
  fakeData.push(project)
}

fakeData.forEach(ele => {
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function () {
    console.log('MONGO GOD');
  });
  let project = new post(ele);
  project.save().then(() => db.close());
});

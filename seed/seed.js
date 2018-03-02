const fake = require('faker');
const mongoose = require('mongoose');
const moment = require('moment');
const database = require('../database/db.js');

let fakeData = [];

for (let i=0; i < 200; i++) {
  let project = {
    projectId: i,
    posts: [],
    founded: `${moment(fake.date.past()).format("MMMM Do, YYYY")}`,
  };

  for (let j=0; j< 4;j++ ) {
    const article = fake.lorem.paragraphs();
    const title = fake.lorem.words();
    let summary;
    if (article.split(' ').length > 28) {
      summary = article.split(' ').slice(0, 28).join(' ');
    } else {
      summary = article;
    }
    let upperCaseTitle = title.split(' ').map(ele => ele.charAt(0).toUpperCase() + ele.slice(1)).join(' ');
    project.posts.push({
      postId: Number(`${i}${j}`),
      article: article,
      summary: summary,
      date: moment(fake.date.recent()).format("MMMM Do"),
      title: upperCaseTitle,
      likes: 0
    });
  }
  fakeData.push(project)
}

fakeData.forEach(Project => {
  let projectId = new mongoose.Types.ObjectId();
  let projectArray = [];
    Project.posts.forEach(post => {
      let idPost = new mongoose.Types.ObjectId();
      projectArray.push(idPost);
      database.insertPost({
        _id: idPost,
        project: projectId,
        postId: post.postId,
        article: post.article,
        summary: post.summary,
        date: post.date,
        title: post.title,
        likes: 10,
        comments: ['Yay', 'It worked'],
      })
    });
    database.insertProject({
      _id: projectId,
      projectId: Project.projectId,
      founded: Project.founded,
      posts: projectArray,
    })
  });



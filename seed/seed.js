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
  let randomCommentNum = Math.floor(Math.random() * 15);
  for (let j=0; j < randomCommentNum ;j++ ) {
    const article = fake.lorem.paragraphs();
    const title = fake.lorem.words();
    let summary;
    if (article.split(' ').length > 28) {
      summary = article.split(' ').slice(0, 28).join(' ');
    } else {
      summary = article;
    }
    let upperCaseTitle = title.split(' ').map(ele => ele.charAt(0).toUpperCase() + ele.slice(1)).join(' ');
    let numOfComments = Math.floor(Math.random() * 20);
    let comments = [];
    for (let i=0; i < numOfComments; i++) {
      comments.push(fake.lorem.sentence())
    }
    project.posts.push({
      postId: Number(`${i}${j}`),
      postNum: Number(`${j + 1}`),
      article: article,
      summary: summary,
      date: moment(fake.date.recent()).format("MMMM Do"),
      title: upperCaseTitle,
      likes: Math.floor(Math.random() * 100),
      images: [fake.image.imageUrl(), fake.image.imageUrl(), fake.image.imageUrl()],
      comments: comments
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
        postNum: post.postNum,
        article: post.article,
        summary: post.summary,
        date: post.date,
        title: post.title,
        likes: post.likes,
        comments: post.comments,
        images: post.images
      })
    });
    database.insertProject({
      _id: projectId,
      projectId: Project.projectId,
      founded: Project.founded,
      posts: projectArray,
    })
  });



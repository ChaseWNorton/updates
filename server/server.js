const express = require('express');
require('dotenv').config();
const db = require('../database/db.js');
const parser = require('body-parser');
const path = require('path');

const app = express();
app.use(parser.json());

app.use(express.static(path.join(__dirname, '../dist')));
app.use('/:id', express.static(path.join(__dirname, '../dist')));

app.get(`/blogs/:id`, function(req, res, next) {
  db.findPost({postId: req.params.id})
    .exec((err, post) => res.send(post))
});

app.get('/api/:id', function(req,res,next) {
  db.findProject({projectId: req.params.id})
    .populate('posts')
    .exec((err, project) => res.send(project))
});

app.put(`/api/likePUT/:id`, function(req,res,next) {
  db.findPostAndUpdate(req.params.id, req.body);
  res.sendStatus(204);
});

app.listen(process.env.PORT, process.env.HOST);
console.log(`Listening at ${process.env.HOST} on port ${process.env.PORT}`);
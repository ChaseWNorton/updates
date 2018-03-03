const express = require('express');
const db = require('../database/db.js');
const parser = require('body-parser');
const path = require('path');

const app = express();
app.use(parser.json());

app.use(express.static('../dist'));
app.use('/:id', express.static('../dist'));
app.get(`/blogs/:id`, function(req, res, next) {
  db.findPost({postId: req.params.id})
    .exec((err, post) => res.send(post))
});

app.get('/api/:id', function(req,res,next) {
  db.findProject({projectId: req.params.id})
    .populate('posts')
    .exec((err, project) => res.send(project))
});

app.listen(3003);
console.log('Listening on port 3003');
const express = require('express');
const db = require('../database/db.js');
const parser = require('body-parser');
const path = require('path');

const app = express();
app.use(parser.json());

app.use(express.static('../dist'));
app.use('/:id', express.static('../dist'));
app.get('/api/:id', function(req,res,next) {
  db.find({projectId: req.params.id})
    .then(dbRes => res.send(dbRes));
});

app.listen(3003);
console.log('Listening on port 3003');
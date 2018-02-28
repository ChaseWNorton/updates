const mongoose = require('mongoose');
  mongoose.connect('mongodb://localhost/updates');
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function () {
    console.log('MONGO GOD');
  });

  const postSchema = mongoose.Schema({
    projectId: Number,
    postId: Number,
    post: Object,
    founded: Date,
  });

  const post = mongoose.model('Post', postSchema);

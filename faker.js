const fake = require('faker');
let fakeData = [];


for (let i=0; i < 200; i++) {
  let project = []
  for (let j=0; j< 4;j++ ) {
    project.push({
      projectId: i,
      post: {
        postId: `${i}${j}`,
        article: fake.lorem.paragraphs(),
        date: fake.date.recent(),
        title: fake.lorem.words(),
      },
      founded: fake.date.past(),
    });
  }
  fakeData.push(project)
}

fakeData/*?*/
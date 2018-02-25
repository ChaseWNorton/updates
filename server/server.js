const serve = require('koa-static-server');
const koa = require('koa');
const app = new koa();

app.use(serve({rootDir: '../dist'}));

app.listen(3003);
console.log('Listening on port 3000');
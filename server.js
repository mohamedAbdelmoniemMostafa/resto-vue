const express = require('express')
const serverStatic = require('serve-static')
const path = require('path')
const app = express();
app.use('/',serverStatic(path.join(__dirname,'/dist')))

// const port = process.env.PORT || 8080

// app.listen(port)

// console.log('listen on port : '+ port);


const data = require('./db.json');
const authServer = require('json-server-auth');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(data);
// const middlewares = jsonServer.defaults();
const db_port = process.env.PORT || 8080;
server.db = router.db
server.use(authServer);

// server.use(jsonServer.rewriter({
//   '/api/*': '/$1',
// }))
// server.use('/',serverStatic(path.join(__dirname,'/dist')));
server.use(router);
server.listen(db_port, () => {
  console.log('data is running on port : '+db_port);
});
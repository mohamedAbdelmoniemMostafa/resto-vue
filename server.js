const express = require('express')
const serverStatic = require('server-static')
const path = require('path')

const app = express();

app.use('/',serverStatic(path.join(__dirname,'/public')))

const port = process.env.PORT || 8000

app.listen(port)

console.log('listen on posrt : '+ port);
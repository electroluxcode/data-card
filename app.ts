const express = require('express');
const http = require('http');
const serveStatic = require('serve-static');
const app = express();

import {cacheTime} from "./common/cache"
const path = require('path');;

app.use('/api/test', function(req, res) {
    res.send({
        code:200,
        message:"succe3ss"
    })
});

import juejin from "./api/Juejin.js"
// http://localhost:3000/api/juejin?id=3004311888208296&
app.use('/api/juejin', juejin);


app.use(
  serveStatic(path.join(__dirname, 'public'), {
    maxAge: 1000,
  })
);

const server = http.createServer(app);

server.listen(3000);

module.exports = app;



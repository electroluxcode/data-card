"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const http = require('http');
const serveStatic = require('serve-static');
const app = express();
const path = require('path');
;
app.use('/api/test', function (req, res) {
    res.send({
        code: 200,
        message: "succe3ss"
    });
});
const Juejin_js_1 = __importDefault(require("./api/Juejin.js"));
// http://localhost:3000/api/juejin?id=3004311888208296&
app.use('/api/juejin', Juejin_js_1.default);
app.use(serveStatic(path.join(__dirname, 'public'), {
    maxAge: 1000,
}));
const server = http.createServer(app);
server.listen(3000);
module.exports = app;

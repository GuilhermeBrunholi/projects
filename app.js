const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const controllers = require('./Controllers');

http.createServer(app).listen(port);
console.log(`http://localhost:${port}`);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/user', controllers.userController);
app.use('/login', controllers.loginController);
app.use('/', controllers.statusController);

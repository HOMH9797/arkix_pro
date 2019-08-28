const express = require('express');
const app = express();

app.use(require('./usuario'));
app.use(require('./login'));
app.use(require('./postNews'));
app.use(require('./file-upload'));

module.exports = app;
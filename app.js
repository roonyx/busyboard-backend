const express = require('express');
const app = express();
const data = require('./mockdata');
app.get('/api/worklogs', function (request, response) {
  response.send(data);
});
app.listen(3000);

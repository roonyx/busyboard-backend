const express = require('express');
const app = express();
const data = require('./fixtures/mockdata');

const port = process.env.PORT || 3000;

app.get('/api/worklogs', function (request, response) {
  response.send(data);
});
app.listen(port);

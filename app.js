const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const express = require('express');
const orcheyaApi = require('./orcheyaApi');
const PORT = process.env.PORT || 3000;
const app = express();

app.listen(PORT);
app.get('/api/worklogs/', async (request, response) => {
  const data = await orcheyaApi.getWorklogs({}, request.query);
  response.send(data);
});

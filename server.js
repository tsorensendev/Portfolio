// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// App setup
const app = express();
app.use(express.static(__dirname + '/public'));
const PORT = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
})

// Server listener
app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`)
})
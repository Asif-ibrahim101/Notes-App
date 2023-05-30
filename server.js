const express = require('express');
const path = require('path');

const app = express()
const port = 3000;

// middlewares
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use('/', require(path.join(__dirname, './router/router.js')));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
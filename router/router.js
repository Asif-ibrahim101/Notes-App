const express = require('express');
const path = require('path');
const _ = require('lodash');


const router = express.Router();
const Data = [];

// home page
router.get('/', (req, res) => {
  res.render('home', {result: Data});
});

router.post('/', (req, res) => {
  const dataObj = {
    headline: req.body.headline,
    desc: req.body.desc,
  };
  Data.push(dataObj);

  res.redirect('/');
});

// specepifc notes page
router.get('/note/:noteName', (req, res) => {
  const params = _.lowerCase(req.params.noteName);

  Data.forEach((results)=> {
    const storedTitle = _.lowerCase(results.headline);

    if (storedTitle === params) {
       res.render('Notes', {Title: results.headline, content: results.desc});
    }
    else{
        console.log("error");
    }
});
})
module.exports = router;
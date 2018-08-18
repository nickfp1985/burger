const express = require('express');
const router = express.Router();

// import burger.js for db functions
let burger = require('../models/burger.js');

// ----- ROUTES -----
router.get('/', function(req, res) {
  burger.selectAll(function(data) {
    let hbsObject = {
      burgers: data
    };
    // console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

router.post('/burgers', function(req, res) {
  burger.insert([
    'burger_name'
  ], [
    req.body.burger_name
  ], function(data) {
    res.redirect('/');
  });
});

router.put('/burgers/:id', function(req, res) {
  let condition = 'id = ' + req.params.id;

  burger.update({
    devoured: true
  }, condition, function(data) {
    res.redirect('/');
  });
});

// export routes
module.exports = router;

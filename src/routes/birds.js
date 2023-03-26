var express = require('express');
var router = express.Router();

/* GET create bird form. */
router.get('/create', function (req, res, next) {
  res.render('createBird', { title: 'Create a Bird' });
});

/* POST create bird. */
router.post('/create', function (req, res, next) {
  var species = req.body.species;
  var nickname = req.body.nickname;
  var status = req.body.status;
  var bird = {
    species: species,
    nickname: nickname,
    status: status,
  };
  console.log(bird);
  res.render('birdCreated', { bird: bird });
});

module.exports = router;

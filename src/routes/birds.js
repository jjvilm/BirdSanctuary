var express = require('express');
var router = express.Router();
const formController = require('../controllers/birdFormController');

/* GET create bird form. */
router.get('/create', function (req, res, next) {
  res.render('createBird', { title: 'Create a Bird' });
});

/* POST create bird. */
router.post('/create', function (req, res, next) {
  // calls the bird form controller to handle data
  formController.form_post(req, res);
});

module.exports = router;

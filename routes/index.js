var express = require('express');
var router = express.Router();
const foodControl = require('../controllers/food.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Simple-Api-CRUD' });
});

router.get('/api', function(req, res, next) {
  res.send('please refer to README.md on how to use the CRUD operation');
});

// food routes
router.get('/api/foods', foodControl.showAll);
router.post('/api/foods', foodControl.add);
router.get('/api/foods/:id', foodControl.showById);
router.put('/api/foods/:id', foodControl.update);
router.delete('/api/foods/:id', foodControl.delete);

// restaurant routes

module.exports = router;

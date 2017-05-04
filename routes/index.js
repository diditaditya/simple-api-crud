var express = require('express');
var router = express.Router();
const foodControl = require('../controllers/food.js');
const restaurantControl = require('../controllers/restaurant.js');

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
router.get('/api/restaurants', restaurantControl.showAll);
router.post('/api/restaurants', restaurantControl.add);
router.get('/api/restaurants/:id', restaurantControl.showById);
router.put('/api/restaurants/:id', restaurantControl.update);
router.delete('/api/restaurants/:id', restaurantControl.delete);

module.exports = router;

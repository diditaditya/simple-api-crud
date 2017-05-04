const Food = require('../models/food.js');

let foodControl = {
    showAll: (req, res) => {
      Food.find({}, (err, foods) => {
        if (err) {
          res.send(err);
        } else {
          res.send(foods);
        }
      });
    },
    showById: (req, res) => {
      Food.findById(req.params.id, (err, food) => {
        if (err) {
          res.send(err);
        } else {
          res.send(food);
        }
      });
    },
    add: (req, res) => {
      let name =  req.body.name;
      let price = req.body.price;
      let exp_date = new Date(req.body.exp_date);

      if(name && price && exp_date) {
        let food = new Food({
          name: name,
          price: price,
          exp_date: exp_date
        });
        food.save((err, food) => {
          if(err) {
            res.send(err);
          } else {
            res.send(food);
          }
        });
      } else {
        res.send('name, price, and exp_date are required.')
      }

    },
    update: (req, res) => {
      Food.findById(req.params.id, (err, food) => {
        if(err) {
          res.send(err);
        } else {
          let name =  req.body.name || food.name;
          let price = req.body.price || food.price;
          let fullYear = food.exp_date.getFullYear();
          let month = food.exp_date.getMonth() + 1;
          let date = food.exp_date.getDate();
          let fullDate = `${fullYear}-${month}-${date}`;
          let exp_date = new Date(req.body.exp_date) || new Date(fullDate);
          Food.update({_id: req.params.id}, {$set:{
            name: name,
            price: price,
            exp_date: exp_date
          }}, (err, updated) => {
            if(err) {
              res.send(err);
            } else {
              res.send(food);
            }
          });
        }
      });

    },
    delete: (req, res) => {
        Food.findByIdAndRemove(req.params.id, (err, deleted) => {
          if(err) {
            res.send(err);
          } else {
            res.send(deleted);
          }
        });
    }
}


module.exports = foodControl;

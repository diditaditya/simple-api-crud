const Restaurant = require('../models/restaurant.js');

let restaurantControl = {
    showAll: (req, res) => {
      Restaurant.find({}, (err, restaurants) => {
        if (err) {
          res.send(err);
        } else {
          res.send(restaurants);
        }
      });
    },
    showById: (req, res) => {
      Restaurant.findById(req.params.id, (err, restaurant) => {
        if (err) {
          res.send(err);
        } else {
          res.send(restaurant);
        }
      });
    },
    add: (req, res) => {
      let name =  req.body.name;
      let owner = req.body.owner;
      let address = req.body.address;
      let open_status = req.body.open_status
      if(name && owner && address && open_status) {
        let restaurant = new Restaurant({
          name: name,
          owner: owner,
          address: address,
          open_status: open_status
        });
        restaurant.save((err, restaurant) => {
          if(err) {
            res.send(err);
          } else {
            res.send(restaurant);
          }
        });
      } else {
        res.send('name, owner, address, and open_status are required.')
      }

    },
    update: (req, res) => {
      Restaurant.findById(req.params.id, (err, restaurant) => {
        if(err) {
          res.send(err);
        } else {
          let name =  req.body.name || restaurant.name;
          let owner = req.body.owner || restaurant.owner;
          let address = req.body.address || restaurant.address;
          let open_status = req.body.open_status || restaurant.open_status;
          Food.update({_id: req.params.id}, {$set:{
            name: name,
            owner: owner,
            address: address,
            open_status: open_status
          }}, (err, updated) => {
            if(err) {
              res.send(err);
            } else {
              res.send(restaurant);
            }
          });
        }
      });

    },
    delete: (req, res) => {
        Restaurant.findByIdAndRemove(req.params.id, (err, deleted) => {
          if(err) {
            res.send(err);
          } else {
            res.send(deleted);
          }
        });
    }
}


module.exports = restaurantControl;

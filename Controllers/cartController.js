const db = require("../Models");
const Cart = db.cart;
const Op = db.Sequelize.Op;
const util = require("../Utils/utils.js").auth;



// Create and Save a new Cart
exports.create = async (req, res) => {
  
  // Create a Cart
  const cart = {
    
      dimensions:(req.body.dimensions)
    
  };

  // Save Cart in the database
  Cart.create(cart)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Cart."
      });
    });
};


// Find a single Cart with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Cart.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Cart with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Cart with id=" + id
      });
    });
};

// Update a Cart by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Cart.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Cart was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Cart with id=${id}. Maybe Cart was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Cart with id=" + id
      });
    });
};

// Delete a Cart with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Cart.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Cart was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Cart with id=${id}. Maybe Cart was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Cart with id=" + id
      });
    });
};

// Delete all Cart from the database.
exports.deleteAll = (req, res) => {
  Cart.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Cart were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Cart."
      });
    });
};

// find all  Cart
exports.findAllPublished = (req, res) => {
  Cart.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Cart."
      });
    });
};
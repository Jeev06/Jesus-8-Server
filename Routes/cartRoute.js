module.exports = app => {

const cart = require('../Controllers/cartController.js');
var router = require("express").Router();
const verifyToken = require('../Middlewares/middlewares.js'); 


// Create a new Cart
router.post('/', cart.create);



router.use(verifyToken); // Protected routes - Require authentication

// Retrieve all published Cart
router.get('/published', cart.findAllPublished);

// Retrieve a single Cart with id
router.get('/:id', cart.findOne);

// Update a Cart with id
router.put('/:id', cart.update);

// Delete a Cart with id
router.delete('/:id', cart.delete);

// Delete all Cart
router.delete('/', cart.deleteAll);

app.use('/api/cart', router);

};

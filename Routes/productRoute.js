module.exports = app => {

const product = require('../Controllers/productController.js');
var router = require("express").Router();
const verifyToken = require('../Middlewares/middlewares.js'); 


// Create a new Product
router.post('/', product.create);



router.use(verifyToken); // Protected routes - Require authentication

// Retrieve all published Product
router.get('/published', product.findAllPublished);

// Retrieve a single Product with id
router.get('/:id', product.findOne);

// Update a Product with id
router.put('/:id', product.update);

// Delete a Product with id
router.delete('/:id', product.delete);

// Delete all Product
router.delete('/', product.deleteAll);

app.use('/api/product', router);

};

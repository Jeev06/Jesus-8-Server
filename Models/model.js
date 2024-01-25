module.exports = (sequelize, Sequelize) => {
  const entities = {};
  
    entities.authentication = sequelize.define('authentication', {
    
    username: {
      type: Sequelize.STRING
    },
    
    password: {
      type: Sequelize.STRING
    }
    
    });
    
    entities.product = sequelize.define('product', {
    
    name: {
      type: Sequelize.STRING
    },
    
    price: {
      type: Sequelize.INTEGER
    }
    
    });
    
    entities.cart = sequelize.define('cart', {
    
    dimensions: {
      type: Sequelize.INTEGER
    }
    
    });
    
  return entities;
};

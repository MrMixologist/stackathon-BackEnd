const Sequelize = require('sequelize')
const db = require('../db')

const Cocktail = db.define('cocktail', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    validate: {
      isUrl: true
    }
  },
  flavor: {
    type: Sequelize.ENUM('fruity/fresh', 'sour', 'sweet', 'savory')
  },
  recipe: {
    type: Sequelize.TEXT,
    allowNull: false,
  }
});

module.exports = Cocktail;

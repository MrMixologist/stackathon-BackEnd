const Sequelize = require('sequelize')
const db = require('../db')

const Ingredient = db.define('ingredient', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  category: {
    type: Sequelize.ENUM('Liquors', 'Mixers', 'Herbs', 'Fruits/Vegetables', 'Sweeteners', 'Bitters'),
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
})

module.exports = Ingredient

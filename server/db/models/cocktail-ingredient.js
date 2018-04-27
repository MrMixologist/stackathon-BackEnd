const Sequelize = require('sequelize')
const db = require('../db')

const CocktailIngredient = db.define('Cocktail-Ingredient', {
  measurement: {
    type: Sequelize.STRING
  }
});

module.exports = CocktailIngredient;

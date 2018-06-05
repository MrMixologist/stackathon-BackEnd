const User = require('./user');
const Ingredient = require('./ingredient');
const Cocktail = require('./cocktail');
const CocktailIngredient = require('./cocktail-ingredient');

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */

// ingredient and cocktail associations
Cocktail.belongsToMany(Ingredient, { through: CocktailIngredient, foreignKey: 'cocktailId'});
Ingredient.belongsToMany(Cocktail, { through: CocktailIngredient, foreignKey: 'ingredientId'});

//user and cocktail associations
Cocktail.belongsToMany(User, { through: 'FavoriteCocktails'});
User.belongsToMany(Cocktail, { through: 'FavoriteCocktails'});

module.exports = {
  User,
  Ingredient,
  Cocktail,
  CocktailIngredient,
};

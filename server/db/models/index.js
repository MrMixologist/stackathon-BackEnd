const User = require('./user')
const Ingredient = require('./ingredient')
const Cocktail = require('./cocktail')
/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */

Cocktail.belongsToMany(Ingredient, { through: 'Cocktail Ingredients'});
Ingredient.belongsToMany(Cocktail, { through: 'Cocktail Ingredients'});

module.exports = {
  User,
  Ingredient,
  Cocktail
}

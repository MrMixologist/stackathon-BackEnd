const router = require('express').Router();
const { Cocktail, Ingredient, User } = require('../db/models');
module.exports = router;

router.get('/', (req, res, next) => {
  User.getCocktails()
    .then(cocktails => res.json(cocktails))
    .catch(next)
});

router.post('/', (req, res, next) => {
  User.getCocktails()
    .then(cocktails => res.json(cocktails))
    .catch(next)
});

router.delete('/', (req, res, next) => {
  User.getCocktails()
    .then(cocktails => res.json(cocktails))
    .catch(next)
});

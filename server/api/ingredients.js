const router = require('express').Router();
const {Ingredient} = require('../db/models');
module.exports = router;

router.get('/', (req, res, next) => {
  Ingredient.findAll()
    .then(ingredients => res.json(ingredients))
    .catch(next)
});

router.get('/:id', (req, res, next) => {
  Ingredient.findById(req.params.id)
    .then(ingredient => res.json(ingredient))
    .catch(next)
});

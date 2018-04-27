const router = require('express').Router();
const { Cocktail, Ingredient } = require('../db/models');
module.exports = router;

router.get('/', (req, res, next) => {
  Cocktail.findAll({
    include: [{ model: Ingredient }]
  })
    .then(cocktails => res.json(cocktails))
    .catch(next)
});

router.get('/:id', (req, res, next) => {
  Cocktail.findById(req.params.id, {
    include: [{ model: Ingredient }]
  })
    .then(cocktail => res.json(cocktail))
    .catch(next)
});


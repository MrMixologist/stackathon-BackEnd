/**
 * Welcome to the seed file! This seed file uses a newer language feature called...
 *
 *                  -=-= ASYNC...AWAIT -=-=
 *
 * Async-await is a joy to use! Read more about it in the MDN docs:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 *
 * Now that you've got the main idea, check it out in practice below!
 */
const db = require('../server/db')
const {User, Cocktail, Ingredient} = require('../server/db/models')

async function seed () {
  await db.sync({force: true})
  console.log('db synced!')
  // Whoa! Because we `await` the promise that db.sync returns, the next line will not be
  // executed until that promise resolves!

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])

//Try to refactor to have cocktails & ingredients as separate promise arrays
  const [martini, oldFashioned] = await Promise.all([
    Cocktail.create({
      name: 'Dirty Martini',
      imageUrl: 'https://foodchannel.com/recipes/mad-men-cookbooks-martini',
      flavor: 'savory',
      recipe: 'Chill a cocktail glass in the freezer. Add the ingredients into a glass filled with ice. Stir and strain into a chilled cocktail glass. Garnish with olives and sip away!'
    }),
    Cocktail.create({
      name: 'Old Fashioned',
      imageUrl: 'https://www.vindulge.com/the-smoky-old-man-a-cocktail-recipe/',
      flavor: 'savory',
      recipe: 'Place the sugar in your glass, and saturate with bitters. Add a dash of water and muddle until dissolved. Fill with ice cubes and add the whiskey. Garnish with orange peel and a cocktail cherry!'
    })
  ]);

  const [gin, dryVermouth, oliveBrine, olives, bourbon, angostura, sugar, orange, cherry] = await Promise.all([
    Ingredient.create({
      name: 'Gin',
      category: 'Liquor'
    }),
    Ingredient.create({
      name: 'Dry vermouth',
      category: 'Liquor'
    }),
    Ingredient.create({
      name: 'Olive brine',
      category: 'Fruit/Vegetable'
    }),
    Ingredient.create({
      name: 'Olives',
      category: 'Fruit/Vegetable'
    }),
    Ingredient.create({
      name: 'Bourbon',
      category: 'Liquor'
    }),
    Ingredient.create({
      name: 'Angostura bitters',
      category: 'Bitters'
    }),
    Ingredient.create({
      name: 'Sugar',
      category: 'Herb'
    }),
    Ingredient.create({
      name: 'Orange',
      category: 'Fruit/Vegetable'
    }),
    Ingredient.create({
      name: 'Cocktail cherry',
      category: 'Fruit/Vegetable'
    })
  ]);

  await Promise.all([
    martini.addIngredient(gin, {through: {measurement: '2.5 oz'}}),
    martini.addIngredient(dryVermouth, {through: {measurement: '0.5 oz'}}),
    martini.addIngredient(oliveBrine, {through: {measurement: '0.5 oz'}}),
    martini.addIngredient(olives, {through: {measurement: '2'}})
  ])

  await Promise.all([
    oldFashioned.addIngredient(bourbon, {through: {measurement: '2 oz'}}),
    oldFashioned.addIngredient(angostura, {through: {measurement: '4 dashes'}}),
    oldFashioned.addIngredient(sugar, {through: {measurement: '1 tsp'}}),
    oldFashioned.addIngredient(orange, {through: {measurement: '1 peel of'}}),
    oldFashioned.addIngredient(cherry, {through: {measurement: '1'}})
  ])

        // Wowzers! We can even `await` on the right-hand side of the assignment operator
  // and store the result that the promise resolves to in a variable! This is nice!
  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
}

// Execute the `seed` function
// `Async` functions always return a promise, so we can use `catch` to handle any errors
// that might occur inside of `seed`
seed()
  .catch(err => {
    console.error(err.message)
    console.error(err.stack)
    process.exitCode = 1
  })
  .then(() => {
    console.log('closing db connection')
    db.close()
    console.log('db connection closed')
  })

/*
 * note: everything outside of the async function is totally synchronous
 * The console.log below will occur before any of the logs that occur inside
 * of the async function
 */
console.log('seeding...')

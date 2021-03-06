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
  const [cosmopolitan, dirtyMartini, gimlet, oldFashioned, manhattan, margarita, mojito, moscowMule, mimosa, mintJulep, negroni, paloma, screwDriver, tomCollins, whiskeySour] = await Promise.all([
    Cocktail.create({
      name: 'Cosmopolitan',
      imageUrl: 'https://i.pinimg.com/originals/7d/26/32/7d263269f2802bf323a491c44892975b.jpg',
      flavor: 'fruity/fresh',
      recipe: 'Chill a cocktail glass. Add the ingredients to a cocktail shaker and fill with ice. Shake and strain into the chilled glass. Garnish with a lime wedge. Voila! You might as well be part of the Sex in the City cast.'
    }),
    Cocktail.create({
      name: 'Dirty Martini',
      imageUrl: 'https://allentownbartenderschool.files.wordpress.com/2016/02/dirty-martini.jpeg?w=1400',
      flavor: 'savory',
      recipe: 'Chill a cocktail glass in the freezer. Add the ingredients into a glass filled with ice. Stir and strain into your chilled glass. Garnish with olives and sip away! (Dirtiness not included.)'
    }),
    Cocktail.create({
      name: 'Gimlet',
      imageUrl: 'http://georgianbayspiritco.com/wp-content/uploads/2018/01/gin-recipe-georgian-bay-gimlet.jpg',
      flavor: 'fruity/fresh',
      recipe: 'Chill a cocktail glass. Add the ingredients into a cocktail shaker, with ice. Shake and strain into your chilled glass. Garnish with a lime wheel. Now gimme your gimlet!'
    }),
    Cocktail.create({
      name: 'Old Fashioned',
      imageUrl: 'https://cdn.liquor.com/wp-content/uploads/2017/08/08074649/6-Rules-for-Drinking-Bourbone-bourbon-old-fashioned-720x720-slideshow.jpg',
      flavor: 'savory',
      recipe: 'Place the sugar in your glass, and saturate with bitters. Add a dash of water and muddle until dissolved. Fill with ice cubes and add the whiskey. Call me old-fashioned, but I always garnish with orange peel and a cocktail cherry!'
    }),
    Cocktail.create({
      name: 'Manhattan',
      imageUrl: 'https://www.whiskyflavour.com/wp-content/uploads/2016/12/whisky-flavour-the-manhattan-cocktail-530x320.jpg',
      flavor: 'savory',
      recipe: 'Chill a cocktail glass. Add all the ingredients into a mixing glass filled with ice and stir well. Strain into your glass, and garnish with a big apple -- oops - I mean cherry!'
    }),
    Cocktail.create({
      name: 'Margarita',
      imageUrl: 'https://thecookful.com/wp-content/uploads/2015/09/Better-Margarita-portrait-680.jpg',
      flavor: 'savory',
      recipe: 'Rub a lime wedge around the rim of a glass and dip the rim in salt. Fill a shaker with ice and add the tequila, triple sec, and lime juice from 1 lime. Shake well. Strain the cocktail over the glass and garnish your drink with a lime wedge. Time to fiesta!'
    }),
    Cocktail.create({
      name: 'Mojito',
      imageUrl: 'http://emerils.com/sites/default/files/tweaked%20mojito.JPG',
      flavor: 'fruity/fresh',
      recipe: `Lightly muddle 5 mint leaves in a shaker to start. Add the simple syrup, lime juice, and rum. Shake well and pour (unstrained) into a glass. Top with club soda and garnish with the last mint leave. As I always say, mo' money, Mo' jitos.`
    }),
    Cocktail.create({
      name: 'Moscow Mule',
      imageUrl: 'https://cdn.shopify.com/s/files/1/1127/4820/products/living_sets-1248-12-crop-2747x2043.jpg?v=1510253983',
      flavor: 'fruity/fresh',
      recipe: `Add vodka and squeeze a half of a lime's juice into a mug (copper if you have). Add ice and ginger beer. Stir to combine. As a garnish, drop in a lime wedge. Easy peasy ginger squeezy.`
    }),
    Cocktail.create({
      name: 'Mimosa',
      imageUrl: 'http://cdn.crunchycreamysweet.com/wp-content/uploads/2018/04/creamsicle-mimosa-5.jpg',
      flavor: 'fruity/fresh',
      recipe: `Pour champagne into a flute glass and fill with OJ to taste. Gotta get in that vitamin C for your Saturday brunching festivities.`
    }),
    Cocktail.create({
      name: 'Mint Julep',
      imageUrl: 'https://cdn.liquor.com/wp-content/uploads/2011/05/mint-julep1.jpg',
      flavor: 'fruity/fresh',
      recipe: `Stir the club soda and sugar until sugar just begins to dissolve. Add the mint leaves and, gently pressing them into the sugar syrup until slightly darkened, using glass muddler or back of large spoon. Add the bourbon to the glass and fill with crushed ice, stirring briefly. Tuck mint sprigs into top of cup, and you'll be feeling like you're at the Kentucky Derby in no time!`
    }),
    Cocktail.create({
      name: 'Negroni',
      imageUrl: 'http://www.recipe4living.com/assets/itemimages/400/400/3/default_f8831d77152633267e8111cd9ec1f91b_dreamstime_s_74077571.jpg',
      flavor: 'savory',
      recipe: `Pour ingredients into a mixing glass filled with ice. Stir well and strain into cocktail glass of choice. Garnish with an orange twist. Good luck negron-ly drinking one!`
    }),
    Cocktail.create({
      name: 'Paloma',
      imageUrl: 'https://statik-2bf0.kxcdn.com/wp-content/uploads/2016/05/Paloma-Cocktail-Recipe.jpg',
      flavor: 'fruity/fresh',
      recipe: 'Rub half of the rim of your glass with grapefruit wedge and then dip in salt. Mix 2 oz of fresh grapefruit juice, 1 tbps fresh lime juice, and sugar in glass, stirring until sugar is dissolved. Stir in tequila, add ice, and top with the club soda. No need to wait for Cinco De Mayo to enjoy this classic!'
    }),
    Cocktail.create({
      name: 'Screwdriver',
      imageUrl: 'https://www.inspiredtaste.net/wp-content/uploads/2011/10/Screwdriver-Cocktail-Recipe-2-1200.jpg',
      flavor: 'fruity/fresh',
      recipe: `Add the vodka to a glass filled with ice. Top with orange juice to taste! Now this is a recipe to always keep in your toolbox.`
    }),
    Cocktail.create({
      name: 'Tom Collins',
      imageUrl: 'http://3gqc5i3a88yk2cv8gqmqocrh.wpengine.netdna-cdn.com/wp-content/uploads/2016/04/Martin-Millers-Gin-Tom-Collins_340x460_acf_cropped.jpg',
      flavor: 'fruity/fresh',
      recipe: `Fill a cocktail shaker with the 3/4 oz of lemon juice, simple syrup, and gin, and add ice. Shake well and strain into a glass (a Collins or highball glass if you have one), filled with ice. Add club soda and garnish with a lemon wheel and cherry if you have. You can thank me and Mr. Collins later.`
    }),
    Cocktail.create({
      name: 'Whiskey Sour',
      imageUrl: 'https://cdn.liquor.com/wp-content/uploads/2016/08/03142547/Most-Popular-Cocktail-Recipes-July-2016-whiskey-sour-720x378-social.jpg',
      flavor: 'sour',
      recipe: `Fill a cocktail shaker with the ingredients (squeeze the lemon for ~ 0.75 oz of juice) and ice and shake well. Strain into a glass filled with ice. Garnish with a cherry and lemon wedge. You won't be sour after drinking one (or several, I don't judge) of these!`
    })
  ]);

  const [angostura, basil, bourbon, campari, champagne, cherry, citrusVodka, clubSoda, cranberryJuice, dryVermouth, gin, gingerBeer, grapefruit, lemon, lime, mint, oliveBrine, olives, orange, orangeJuice, rye, simpleSyrup, sweetVermouth, sugar, tequila, thyme, tripleSec, vodka, whiteRum] = await Promise.all([
    Ingredient.create({
      name: 'Angostura bitters',
      category: 'Bitters'
    }),
    Ingredient.create({
      name: 'Basil',
      category: 'Herbs'
    }),
    Ingredient.create({
      name: 'Bourbon',
      category: 'Liquors'
    }),
    Ingredient.create({
      name: 'Campari',
      category: 'Liquors'
    }),
    Ingredient.create({
      name: 'Champagne',
      category: 'Liquors'
    }),
    Ingredient.create({
      name: 'Cocktail cherry',
      category: 'Fruits/Vegetables'
    }),
    Ingredient.create({
      name: 'Citrus Vodka',
      category: 'Liquors'
    }),
    Ingredient.create({
      name: 'Club soda',
      category: 'Mixers'
    }),
    Ingredient.create({
      name: 'Cranberry juice',
      category: 'Mixers'
    }),
    Ingredient.create({
      name: 'Dry vermouth',
      category: 'Liquors'
    }),
    Ingredient.create({
      name: 'Gin',
      category: 'Liquors'
    }),
    Ingredient.create({
      name: 'Ginger beer',
      category: 'Mixers'
    }),
    Ingredient.create({
      name: 'Grapefruit',
      category: 'Fruits/Vegetables'
    }),
    Ingredient.create({
      name: 'Lemon',
      category: 'Fruits/Vegetables'
    }),
    Ingredient.create({
      name: 'Lime',
      category: 'Fruits/Vegetables'
    }),
    Ingredient.create({
      name: 'Mint leaves',
      category: 'Herbs'
    }),
    Ingredient.create({
      name: 'Olive brine',
      category: 'Fruits/Vegetables'
    }),
    Ingredient.create({
      name: 'Olives',
      category: 'Fruits/Vegetables'
    }),
    Ingredient.create({
      name: 'Orange',
      category: 'Fruits/Vegetables'
    }),
    Ingredient.create({
      name: 'Orange Juice',
      category: 'Mixers'
    }),
    Ingredient.create({
      name: 'Rye',
      category: 'Liquors'
    }),
    Ingredient.create({
      name: 'Simple Syrup',
      category: 'Sweeteners'
    }),
    Ingredient.create({
      name: 'Sweet Vermouth',
      category: 'Sweeteners'
    }),
    Ingredient.create({
      name: 'Sugar',
      category: 'Sweeteners'
    }),
    Ingredient.create({
      name: 'Tequila',
      category: 'Liquors'
    }),
    Ingredient.create({
      name: 'Thyme',
      category: 'Herbs'
    }),
    Ingredient.create({
      name: 'Triple Sec',
      category: 'Liquors'
    }),
    Ingredient.create({
      name: 'Vodka',
      category: 'Liquors'
    }),
    Ingredient.create({
      name: 'White Rum',
      category: 'Liquors'
    })
  ]);

  await Promise.all([
    dirtyMartini.addIngredient(gin, {through: {measurement: '2.5 oz'}}),
    dirtyMartini.addIngredient(dryVermouth, {through: {measurement: '0.5 oz'}}),
    dirtyMartini.addIngredient(oliveBrine, {through: {measurement: '0.5 oz'}}),
    dirtyMartini.addIngredient(olives, {through: {measurement: '2'}})
  ]);

  await Promise.all([
    oldFashioned.addIngredient(bourbon, {through: {measurement: '2 oz'}}),
    oldFashioned.addIngredient(angostura, {through: {measurement: '4 dashes'}}),
    oldFashioned.addIngredient(sugar, {through: {measurement: '1 tsp'}}),
    oldFashioned.addIngredient(orange, {through: {measurement: '1 peel of'}}),
    oldFashioned.addIngredient(cherry, {through: {measurement: '1'}})
  ]);

  await Promise.all([
    margarita.addIngredient(tequila, {through: {measurement: '1.5 oz'}}),
    margarita.addIngredient(tripleSec, {through: {measurement: '1.5 dashes'}}),
    margarita.addIngredient(lime, {through: {measurement: '2'}})
  ]);

  await Promise.all([
    mojito.addIngredient(whiteRum, {through: {measurement: '1.5 oz'}}),
    mojito.addIngredient(simpleSyrup, {through: {measurement: '0.75 oz'}}),
    mojito.addIngredient(lime, {through: {measurement: '0.75'}}),
    mojito.addIngredient(mint, {through: {measurement: '6'}}),
    mojito.addIngredient(clubSoda, {through: {measurement: '1.5 oz'}})
  ]);

  await Promise.all([
    mintJulep.addIngredient(bourbon, {through: {measurement: '3 oz'}}),
    mintJulep.addIngredient(sugar, {through: {measurement: '2 tsp'}}),
    mintJulep.addIngredient(mint, {through: {measurement: '12 leaves'}}),
    mintJulep.addIngredient(clubSoda, {through: {measurement: '1 oz'}})
  ]);

  await Promise.all([
    cosmopolitan.addIngredient(citrusVodka, {through: {measurement: '1.5 oz'}}),
    cosmopolitan.addIngredient(tripleSec, {through: {measurement: '1 oz'}}),
    cosmopolitan.addIngredient(lime, {through: {measurement: '0.5'}}),
    cosmopolitan.addIngredient(cranberryJuice, {through: {measurement: '1 dash'}})
  ]);

  await Promise.all([
    moscowMule.addIngredient(vodka, {through: {measurement: '1.5 oz'}}),
    moscowMule.addIngredient(gingerBeer, {through: {measurement: '0.5 cup'}}),
    moscowMule.addIngredient(lime, {through: {measurement: '1'}}),
  ]);

  await Promise.all([
    manhattan.addIngredient(rye, {through: {measurement: '2 oz'}}),
    manhattan.addIngredient(lemon, {through: {measurement: '1'}}),
    manhattan.addIngredient(simpleSyrup, {through: {measurement: '0.75 oz'}}),
    manhattan.addIngredient(cherry, {through: {measurement: '1'}})
  ]);

  await Promise.all([
    whiskeySour.addIngredient(bourbon, {through: {measurement: '1.5 oz'}}),
    whiskeySour.addIngredient(sweetVermouth, {through: {measurement: '1 oz'}}),
    whiskeySour.addIngredient(angostura, {through: {measurement: '5 drops of'}}),
    whiskeySour.addIngredient(cherry, {through: {measurement: '1'}})
  ]);

  await Promise.all([
    tomCollins.addIngredient(gin, {through: {measurement: '1.5 oz'}}),
    tomCollins.addIngredient(simpleSyrup, {through: {measurement: '0.75 oz'}}),
    tomCollins.addIngredient(lemon, {through: {measurement: '1'}}),
    tomCollins.addIngredient(clubSoda, {through: {measurement: '1.5 oz'}})
  ]);

  await Promise.all([
    gimlet.addIngredient(gin, {through: {measurement: '2.5 oz'}}),
    gimlet.addIngredient(simpleSyrup, {through: {measurement: '0.5 oz'}}),
    gimlet.addIngredient(lime, {through: {measurement: '1'}}),
  ]);

  await Promise.all([
    paloma.addIngredient(grapefruit, {through: {measurement: '1'}}),
    paloma.addIngredient(sugar, {through: {measurement: '1 tsp'}}),
    paloma.addIngredient(lime, {through: {measurement: '1'}}),
    paloma.addIngredient(clubSoda, {through: {measurement: '2 oz'}}),
    paloma.addIngredient(tequila, {through: {measurement: '2 oz'}}),
  ]);

  await Promise.all([
    screwDriver.addIngredient(vodka, {through: {measurement: '2 oz'}}),
    screwDriver.addIngredient(orangeJuice, {through: {measurement: '~ 2 oz'}}),
  ]);

  await Promise.all([
    mimosa.addIngredient(champagne, {through: {measurement: '4 oz'}}),
    mimosa.addIngredient(orangeJuice, {through: {measurement: '2 oz'}}),
  ]);

  await Promise.all([
    negroni.addIngredient(gin, {through: {measurement: '1 oz'}}),
    negroni.addIngredient(campari, {through: {measurement: '1 oz'}}),
    negroni.addIngredient(sweetVermouth, {through: {measurement: '1 oz'}}),
    negroni.addIngredient(orange, {through: {measurement: '1 twist'}}),
  ]);

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

const Mongoose = require('Mongoose')
const db = require('../db')
const { Cuisine, Recipe } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const theGodfather = await Movie.find({ title: 'The Godfather' })


    const recipes = [
      {
          firstName: `Brad`,
          lastName: `Pitt`,
          age: 58,
          deceased: false,
          // url: { type: String, required: true },
          movie_id: fightClub[0]._id
      },
    ]

    await Recipe.insertMany(recipes)
    console.log('Created recipes with cuisines!')
  }
  const run = async () => {
    await main()
    db.close()
  }

  run()
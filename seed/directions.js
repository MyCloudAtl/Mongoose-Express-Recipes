const Mongoose = require('Mongoose')
const db = require('../db')
const { Recipe, Direction } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const theGodfather = await Movie.find({ title: 'The Godfather' })


    const directions = [
      {
          firstName: `Brad`,
          lastName: `Pitt`,
          age: 58,
          deceased: false,
          // url: { type: String, required: true },
          movie_id: fightClub[0]._id
      },
    ]

    await Direction.insertMany(directions)
    console.log('Created directions with recipes!')
  }
  const run = async () => {
    await main()
    db.close()
  }

  run()
const Mongoose = require('Mongoose')
const db = require('../db')
const { Cuisine } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const cuisines = [
    {
        title: `The Godfather`,
        runTime: `2h15m`,
        rating: `9.2/10`,
        yearReleased: 1972,
        summary: `The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.`,
    },
  ]

  await Cuisine.insertMany(cuisines)
  console.log('Created cuisines!')
}

const run = async () => {
  await main()
  db.close()
}

run()
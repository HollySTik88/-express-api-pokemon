// Import des modules
const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

// Couleur dans la console
const colors = require('colors')


// Initialisation d'Express
const app = express()

// Accepter les données envoyées par formulaire
app.use(express.json())
app.use(express.urlencoded())


// Routes
app.use('/api/pokemons', require('./routes/pokemons'))
app.use('/api/abilities', require('./routes/abilities'))


// lancement serveur
app.listen(port, () => {
 console.log(`Server started on ${port}`)
})


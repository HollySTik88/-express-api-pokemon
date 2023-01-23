// Import des modules
const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

// Initialisation d'Express
const app = express()
// Routes
app.use('/api/pokemons', require('./routes/pokemons'))
app.use('/api/pokemons/:id', require('./routes/pokemons'))
app.use('/api/abilities', require('./routes/abilities'))
app.use('/api/types', require('./routes/types'))


// lancement serveur
app.listen(port, () => {
 console.log(`Server started on ${port}`)
})


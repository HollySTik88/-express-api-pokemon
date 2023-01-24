const express = require('express')
const router = express.Router()

const{
    getPokemons,
    addPokemons,
    updatePokemon,
    deletePokemon
} = require(('../Controllers/pokemonsController'))


router.get('/', getPokemons)
router.post('/', addPokemons)
router.put('/:id', updatePokemon)
router.delete('/:id', deletePokemon)


   


module.exports = router
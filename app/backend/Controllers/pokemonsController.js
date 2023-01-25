const asyncHandler = require('express-async-handler');
const { getAll,
    getById,
    update,
    create,
    remove } = require('../Repositories/pokemons-repository')

const getPokemons = asyncHandler(async (req, res) => {
    const rows = await getAll()
    res.json(rows)
})

const getPokemon = asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id)
    if (!id) {
        res.status(400).end()
    }
    try {
        res.json(await getById(id))
    } catch (error) {
        res.status(404).end()
    }
})

const updatePokemon = asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id)
    if (!id) {
        res.status(400).end()
    }
    const pokemon = req.body
    pokemon.id = id
    try {
        res.json(await update(pokemon))
    } catch (error) {
        res.status(404).end()
    }
})

const addPokemon = asyncHandler(async (req, res) => {
    const pokemon = req.body
    try {
        res.json(await create(pokemon))
    } catch (error) {
        res.status(400).end()
    }
})

const deletePokemon = asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id)
    if (!id) {
        res.status(400).end()
    }

    try {
        res.json(await remove(id))
    } catch (error) {
        res.status(404).end()
    }
})

module.exports = {
    getPokemons,
    getPokemon,
    addPokemon,
    updatePokemon,
    deletePokemon
}
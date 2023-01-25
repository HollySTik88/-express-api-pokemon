const db = require('../services/db')
const config = require('../config/db')

async function getAll() {
    const request = "SELECT id, pokedex_number, name, size, weight, image, type FROM pokemons"
    const pokemons = await db.query(request)

    const request2 = "SELECT moveset.pokemon_id, abilities.id, abilities.description, abilities.puissance, abilities.precision, abilities.pp_max, abilities.type, abilities.nom, abilities.classe FROM abilities, moveset WHERE abilities.id = moveset.ability_id AND moveset.pokemon_id = ANY($1::int[])"
    const values2 = [pokemons.map(p => p.id)]
    const movesets = await db.query(request2, values2)

    return pokemons
        .map(p => ({
            ...p, moveset: movesets.filter(m => m.pokemon_id === p.id)
                .map(m => { delete (m.pokemon_id); return m })
        }))
}

async function getById(id) {
    const request1 = "SELECT id, pokedex_number, name, size, weight, image, type FROM pokemons WHERE id = $1"
    const values1 = [id]

    const pokemons = await db.query(request1, values1)
    if (!pokemons.length) {
        throw Error('Not Found')
    }

    const request2 = "SELECT abilities.id, abilities.description, abilities.puissance, abilities.precision, abilities.pp_max, abilities.type, abilities.nom, abilities.classe FROM abilities, moveset WHERE abilities.id = moveset.ability_id AND moveset.pokemon_id = $1"
    const values2 = [id]

    const moveset = await db.query(request2, values2)

    const pokemon = pokemons[0]
    pokemon.moveset = moveset
    return pokemon
}

async function update(pokemon) {
    const request1 = "UPDATE pokemons SET pokedex_number = $2, name = $3, size = $4, weight = $5, image = $6, type = $7 WHERE id = $1 RETURNING *"
    const values1 = [pokemon.id, pokemon.pokedex_number, pokemon.name, pokemon.size, pokemon.weight, pokemon.image, pokemon.type]

    const result = await db.query(request1, values1);
    if (!result.length) {
        throw Error('Not Found')
    }

    const request2 = "DELETE FROM moveset WHERE pokemon_id = $1"
    const values2 = [pokemon.id]
    await db.query(request2, values2);

    for (var i = 0; pokemon.moveset && i < pokemon.moveset.length; i++) {
        const move = pokemon.moveset[i]
        if (!move.id) {
            throw Error('Bad Request')
        }
        const request3 = "INSERT INTO moveset(pokemon_id, ability_id) VALUES ($1, $2)"
        const values3 = [pokemon.id, move.id]
        await db.query(request3, values3)
    }

    return getById(pokemon.id)
}

async function create(pokemon) {
    const request1 = "INSERT INTO pokemons(pokedex_number, name, size, weight, image, type) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *"
    const values1 = [pokemon.pokedex_number, pokemon.name, pokemon.size, pokemon.weight, pokemon.image, pokemon.type]


    const pokemons = await db.query(request1, values1)
    if (!pokemons.length) {
        throw Error('Not Found')
    }
    const resultid = pokemons[0].id

    for (var i = 0; pokemon.moveset && i < pokemon.moveset.length; i++) {
        const move = pokemon.moveset[i]
        if (!move.id) {
            throw Error('Bad Request')
        }
        const request2 = "INSERT INTO moveset(pokemon_id, ability_id) VALUES ($1, $2)"
        const values2 = [resultid, move.id]
        await db.query(request2, values2)
    }
    return getById(resultid)
}

async function remove(id) {

    const request1 = "DELETE FROM moveset WHERE pokemon_id = $1"
    const values = [id]

    await db.query(request1, values)

    const request2 = "DELETE FROM pokemons WHERE id = $1 RETURNING *"
    const pokemons = await db.query(request2, values)

    if (!pokemons.length) {
        throw Error('Not Found')
    }

    return pokemons[0]
}

module.exports = {
    getAll,
    getById,
    update,
    create,
    remove
}
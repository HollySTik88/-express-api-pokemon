const asyncHandler = require('express-async-handler');
const { Client } = require("pg")
const dotenv = require("dotenv")
dotenv.config()


    const getPokemons =  asyncHandler(async (req, res) => {
        try {
        const client = new Client({
            user: process.env.PGUSER,
            host: process.env.PGHOST,
            database: process.env.PGDATABASE,
            password: process.env.PGPASSWORD,
            port: process.env.PGPORT
            })  
            await client.connect()

  const result = await client.query('SELECT * FROM "Pokemon"')
  //console.log(result.rows)

  res.json({ message: `Affiche la liste des pokemons${result.rows}` })

await client.end()
} catch (error) {
console.log(error)
}
 
   })

   const addPokemons = asyncHandler(async (req, res) => {

    try {
        const client = new Client({
            user: process.env.PGUSER,
            host: process.env.PGHOST,
            database: process.env.PGDATABASE,
            password: process.env.PGPASSWORD,
            port: process.env.PGPORT
            })
            
            await client.connect() 

        

const request = 'INSERT INTO "Pokemon" (abilities, name) VALUES ($1, $2) RETURNING *'
const values = ['JesaiPas', "trucmuche"]
const result = await client.query(request, values)
        res.status(201).end()
        console.log(result.rows)

        res.json({ message: `A ajouté ${values}` })
        

        await client.end()
} catch (error) {
console.log(error)
}

   })


   const updatePokemon = asyncHandler(async (req, res) => {

    try {
        const client = new Client({
            user: process.env.PGUSER,
            host: process.env.PGHOST,
            database: process.env.PGDATABASE,
            password: process.env.PGPASSWORD,
            port: process.env.PGPORT
            })
            
            await client.connect() 

            res.json({ message: `Met à jour un pokemon ${req.params.id}` })
  

const request = 'UPDATE "Pokemon" SET name = $1, WHERE abilities = $2 RETURNING *'

const values = ['ça', "trucmuche",]
const result = await client.query(request, values)
        res.status(201).end()
        console.log(result.rows)

        res.json({ message: `A updaté ${values}` })
        

        await client.end()
} catch (error) {
console.log(error)
}

   })


   const deletePokemon = asyncHandler(async (req, res) => {
    res.json({ message: `Supprime un pokemon${req.params.id}` })
   })

   module.exports = {
    getPokemons,
    addPokemons,
    updatePokemon,
    deletePokemon
   }
   
const { Client } = require("pg")
const dotenv = require("dotenv")
dotenv.config()
 
const connectDb = async () => {
    try {
        const client = new Client({
            user: process.env.PGUSER,
            host: process.env.PGHOST,
            database: process.env.PGDATABASE,
            password: process.env.PGPASSWORD,
            port: process.env.PGPORT
        })
 
        await client.connect()

//const abilities = "Trempette"
//const name = "Magicarpe"
//const request = 'INSERT INTO "Pokemon" (abilities, name) VALUES ($1, $2) RETURNING *'
//const values = ['Trempette', 'Magicarpe']
//const result = await client.query(request, values)



//const res = await client.query('SELECT * FROM "Pokemon"')

//console.log(res.rows)

        await client.end()
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDb

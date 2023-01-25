const db = require('../services/db')
const config = require('../config/db')

async function getAll() {
    const request = "SELECT id,description, puissance, precision, pp_max, type, nom, classe FROM abilities"
    return await db.query(request)
}
async function update(ability){
    const request = "UPDATE abilities SET description = $2, puissance = $3, precision = $4, pp_max = $5, type = $6, nom = $7, classe = $8 WHERE id = $1 RETURNING *"
    const values = [ability.id, ability.description, ability.puissance, ability.precision, ability.pp_max, ability.type, ability.nom, ability.classe]
    
    const result = await db.query(request, values);
    if(!result.length){
        throw Error('Not Found')
    }
    return await db.query(request, values)

}

module.exports = {
    getAll,
    update
}
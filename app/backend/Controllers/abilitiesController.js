const asyncHandler = require('express-async-handler');
const {getAll, update} = require('../Repositories/abilities-repository')

const getAbilities = asyncHandler(async (req, res) => {
    const rows = await getAll()
    res.json(rows)
})

const updateAbilities = asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id)
    if(!id){
        res.status(400).end()
    }
    const ability = req.body
    ability.id = id
    try{
        res.json(await update(ability))
    } catch(error){
        res.status(404).end()
    }
})

module.exports = {
    getAbilities,
    updateAbilities
}
const express = require('express')
const router = express.Router()

const{
    getAbilities,
    addAbilities,
    updateAbilities,
    deleteAbilities
} = require(('../Controllers/abilitiesController'))

router.get('/', getAbilities)
router.post('/', addAbilities)
router.put('/:id', updateAbilities)
router.delete('/:id', deleteAbilities)


module.exports = router
const express = require('express')
const router = express.Router()

const {
    getAbilities,
    updateAbilities,
} = require(('../Controllers/abilitiesController'))

router.get('/', getAbilities)
router.put('/:id', updateAbilities)


module.exports = router
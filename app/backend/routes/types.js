const express = require('express')
const router = express.Router()

const{
    getTypes,
    addType,
    updateType,
    deleteType
} = require(('../Controllers/typeController'))

router.get('/', getTypes)
router.post('/', addType)
router.put('/:id', updateType)
router.delete('/:id', deleteType)


module.exports = router
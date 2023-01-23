const getTypes = (req, res) => {
    res.json({ message: 'Récupère la liste des types' })
   }
   const addType = (req, res) => {
    res.json({ message: 'Ajoute un type' })
   }
   const updateType = (req, res) => {
    res.json({ message: `Met à jour un type ${req.params.id}` })
   }
   const deleteType = (req, res) => {
    res.json({ message: `Supprime un type ${req.params.id}` })
   }
   module.exports = {
    getTypes,
    addType,
    updateType,
    deleteType
   }
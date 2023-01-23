const getAbilities = (req, res) => {
    res.json({ message: 'Récupère la liste des compétences' })
   }
   const addAbilities = (req, res) => {
    res.json({ message: 'Ajoute une compétence' })
   }
   const updateAbilities = (req, res) => {
    res.json({ message: `Met à jour une compétence ${req.params.id}` })
   }
   const deleteAbilities = (req, res) => {
    res.json({ message: `Supprime une compétence${req.params.id}` })
   }
   module.exports = {
    getAbilities,
    addAbilities,
    updateAbilities,
    deleteAbilities
   }
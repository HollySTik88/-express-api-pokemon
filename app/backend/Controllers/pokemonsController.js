const getPokemons = (req, res) => {
    res.json({ message: 'Récupère la liste des pokemons' })
   }
   const addPokemons = (req, res) => {
    res.json({ message: 'Ajoute un pokemon' })
   }
   const updatePokemon = (req, res) => {
    res.json({ message: `Met à jour un pokemon ${req.params.id}` })
   }
   const deletePokemon = (req, res) => {
    res.json({ message: `Supprime un pokemon${req.params.id}` })
   }
   module.exports = {
    getPokemons,
    addPokemons,
    updatePokemon,
    deletePokemon
   }
   
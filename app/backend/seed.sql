INSERT INTO pokemons(pokedex_number, name, size, weight, image, type) VALUES ($1, $2, $3, $4, $5, $6)
SELECT id, pokedex_number, name, size, weight, image, type FROM pokemons
SELECT id, pokedex_number, name, size, weight, image, type FROM pokemons WHERE id = $1
UPDATE pokemons SET pokedex_number = $2, name = $3, size = $4, weight = $5, image = $6, type = $7 WHERE id = $1
DELETE pokemons WHERE id = $1

INSERT INTO moveset(pokemon_id, ability_id) VALUES ($1, $2)
SELECT id, pokemon_id, ability_id FROM moveset
SELECT id, pokemon_id, ability_id FROM moveset WHERE id = $1
DELETE moveset WHERE id = $1

INSERT INTO abilities(description, puissance, precision, pp_max, type, nom, classe) VALUES ($1, $2, $3, $4, $5, $6, $7)
SELECT description, puissance, precision, pp_max, type, nom, classe FROM abilities
SELECT description, puissance, precision, pp_max, type, nom, classe FROM abilities WHERE id = $1
UPDATE abilities SET description = $2, puissance = $3, precision = $4, pp_max = $5, type = $6, nom = $7, classe = $8 WHERE id = $1
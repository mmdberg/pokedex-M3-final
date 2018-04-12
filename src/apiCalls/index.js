export const getPokemonTypeData = async () => {
  try {
    const response = await fetch('http://localhost:3001/types')
    const pokemonTypeData = await response.json()
    const pokemonInfo = await getPokemon(pokemonTypeData)
    return pokemonInfo
  } catch (error) {
    console.log('get type data:', error)
    throw new Error('Unable to get Pokemon Type Data')
  }
}

const getPokemon = (typeArray) => {
  const objectPromises = typeArray.map( async type => {
    const pokemonPromises = type.pokemon.map(async id => {
      const response = await fetch(`http://localhost:3001/pokemon/${id}`)
      return await response.json()
    })
    const pokemonCharacters = await Promise.all(pokemonPromises)
    return {...type, pokemon: pokemonCharacters}
  })
  return Promise.all(objectPromises)
}
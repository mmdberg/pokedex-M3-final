export const getPokemonTypeData = async () => {
  try {
    const response = await fetch('http://localhost:3001/types')
    const pokemonTypeData = await response.json()
    return pokemonTypeData
  } catch (error) {
    console.log('get type data:', error)
    throw new Error('Unable to get Pokemon Type Data')
  }

}
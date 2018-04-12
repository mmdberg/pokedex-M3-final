export const getPokemonTypeData = async () => {
  try {
    const response = await fetch('http://localhost:3001/types')
    const pokemonTypeData = await response.json()
    console.log(pokemonTypeData)
  } catch (error) {
    console.log('get type data', error)
  }

}
export const typeReducer = (state = [], actions) => {
  switch(actions.type) {
    case 'ADD_TYPE_DATA':
      return [...actions.pokemonTypes]
    default:
      return state;
  }

}
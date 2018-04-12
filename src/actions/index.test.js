import * as actions from './index';
import { mockPokemonTypeData } from '../mockData';

describe('Actions', () => {
  it('should create action type of ADD_TYPE_DATA', () => {
    const pokemonTypes = mockPokemonTypeData;
    const expected = {
      type: 'ADD_TYPE_DATA',
      pokemonTypes
    }
    expect(actions.addTypeData(pokemonTypes)).toEqual(expected)
  });
});
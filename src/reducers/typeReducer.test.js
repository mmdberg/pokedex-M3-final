import { typeReducer } from './typeReducer';
import * as actions from '../actions';
import { mockPokemonTypeData } from '../mockData';

describe('type reducer', () => {
  it('should return default state', () => {
    expect(typeReducer(undefined, {})).toEqual([])
  });

  it('should add pokemon types to state', () => {
    expect(typeReducer(undefined, actions.addTypeData(mockPokemonTypeData))).toEqual(mockPokemonTypeData)
  })
});
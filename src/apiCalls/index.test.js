import * as api from './index';
import { mockPokemonTypeData, singlePokemonType } from '../mockData';

describe('Api calls', () => {

  describe('getPokemonTypeData', () => {

    it('should fetch data with the right params', () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockPokemonTypeData)
      }));
      const expected = 'http://localhost:3001/types';

      api.getPokemonTypeData()
      expect(window.fetch).toHaveBeenCalledWith(expected)
    });

    it('should call getPokemon with the right params', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockPokemonTypeData)
      }));
      const spy = jest.spyOn(api, 'getPokemon')
      const mockGetPokemon = api.getPokemon(mockPokemonTypeData)
      await api.getPokemonTypeData();
      expect(spy).toHaveBeenCalledWith(mockPokemonTypeData)
    });

    it('should throw error on error', () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.reject());
      const expected = new Error('Unable to get Pokemon Type Data')
      expect(api.getPokemonTypeData()).rejects.toEqual(expected)
    });

  });

  describe('getPokemon', () => {
    it('should fetch data with the right params', () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: true,
        json:() => Promise.resolve({})
      }));
      const expected = 'http://localhost:3001/pokemon/16'
      api.getPokemon(singlePokemonType)
      expect(window.fetch).toHaveBeenCalledWith(expected)
    });

    it('should throw error on error', () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.reject())
      const expected = new Error('Unable to get pokemon data')
      expect(api.getPokemon(singlePokemonType)).rejects.toEqual(expected)
    });

  });

});
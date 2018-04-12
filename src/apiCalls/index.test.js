import * as api from './index';
import { mockPokemonTypeData } from '../mockData';

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

    it('should throw error on error', () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.reject());
      const expected = new Error('Unable to get Pokemon Type Data')
      expect(api.getPokemonTypeData()).rejects.toEqual(expected)
    });

  });

});
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { shallow } from 'enzyme';
import React from 'react';
import { mockPokemonTypeData } from '../../mockData';
import * as actions from '../../actions';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  });

  it.skip('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });
  //call getpokemontypedata on page load

  describe('mapStateToProps', () => {
    it('should correctly add typeData to props', () => {
      const mockState = {
        typeData: [mockPokemonTypeData]
      }
      const mapped = mapStateToProps(mockState)
      expect(mapped.typeData).toEqual([mockPokemonTypeData])
    });
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch with right params on addTypeData', () => {
      const mockDispatch = jest.fn();
      const expected = actions.addTypeData(mockPokemonTypeData)
      const mapped = mapDispatchToProps(mockDispatch)
      mapped.addTypeData(mockPokemonTypeData)
      expect(mockDispatch).toHaveBeenCalledWith(expected)
    });
  });
});

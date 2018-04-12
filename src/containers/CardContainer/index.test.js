import { shallow } from 'enzyme';
import { CardContainer, mapStateToProps } from './index';
import React from 'react';
import { mockPokemonTypeData } from '../../mockData';

describe('CardContainer', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<CardContainer typeData={ mockPokemonTypeData }/>)
    expect(wrapper).toMatchSnapshot()
  });

  describe('mapStateToProps', () => {
    it('should correctly map typeData to props', () => {
      const mockState = {
        typeData: mockPokemonTypeData
      }
      const mapped = mapStateToProps(mockState)
      expect(mapped.typeData).toEqual(mockPokemonTypeData)
    })
  })
})
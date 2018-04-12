import { shallow } from 'enzyme';
import { CardContainer, mapStateToProps } from './index';
import React from 'react';
import { mockPokemonTypeData, mockType } from '../../mockData';

describe('CardContainer', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<CardContainer typeData={ mockPokemonTypeData }/>)
    expect(wrapper).toMatchSnapshot()
  });

  it('should set pokemonList state on page load', () => {
    const wrapper = shallow(<CardContainer typeData={ mockPokemonTypeData }/>)
    expect(wrapper.state('pokemonList')).not.toEqual([])
  })

  it('should call makeActiveArray with right params on handleClick', () => {
    const wrapper = shallow(<CardContainer typeData={ mockPokemonTypeData }/>)
    wrapper.instance().makeActiveArray = jest.fn()
    wrapper.instance().handleClick(mockType)
    expect(wrapper.instance().makeActiveArray).toHaveBeenCalledWith(mockType)
  });

  it('should set activeList state after click', () => {
    const wrapper = shallow(<CardContainer typeData={ mockPokemonTypeData }/>)
    wrapper.instance().makeActiveArray(mockType) 
    expect(wrapper.state('activeList')).not.toEqual([])
  })

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
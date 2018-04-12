import { App, mapStateToProps, mapDispatchToProps } from './App';
import { shallow } from 'enzyme';
import React from 'react';
import { mockPokemonTypeData } from '../../mockData';
import * as actions from '../../actions';
import * as api from '../../apiCalls'

describe('App', () => {
  let wrapper;
  let mockAddTypeData;

  beforeEach(() => {
    mockAddTypeData = jest.fn()
    wrapper = shallow(<App 
      typeData={mockPokemonTypeData}
      addTypeData={mockAddTypeData}
      />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('should call getPokemonTypeData on page load', async () => {
    api.getPokemonTypeData = jest.fn();
    await wrapper.instance().componentDidMount()
    expect(api.getPokemonTypeData).toHaveBeenCalled()
  });

  it('should call addTypeData on page load'), async () => {
    await wrapper.instance().componentDidMount()
    expect(mockAddTypeData).toHaveBeenCalled()
  };  

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

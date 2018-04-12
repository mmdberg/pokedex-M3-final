import { Card } from './index';
import { shallow } from 'enzyme';
import React from 'react';
import { mockType } from '../../mockData';

describe('Card', () => {
  it('should match snapshot without active pokemon', () => {
    const wrapper = shallow(<Card type={mockType} pokemon={[]}/>)
    expect(wrapper).toMatchSnapshot()
  });

  it('should match snapshot with active pokemon', () => {
    const mockPokemon = [{
      name: 'spearow',
      weight: 20,
      sprites: {back_default: 'img'},
      type: "3"
    }]
    const wrapper = shallow(<Card type={mockType} pokemon={mockPokemon}/>)
    expect(wrapper).toMatchSnapshot()
  });
});
import { Card } from './index';
import { shallow } from 'enzyme';
import React from 'react';
import { mockType } from '../../mockData';

describe('Card', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Card type={mockType}/>)
    expect(wrapper).toMatchSnapshot()
  });
})
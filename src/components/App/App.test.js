import App from './App';
import { shallow } from 'enzyme';
import React from 'react';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it.skip('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });
});

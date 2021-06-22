/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import { Header } from 'components';

describe('Footer Component', () => {
  it('renders logo and address', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('header').length).toEqual(1);
  });
});

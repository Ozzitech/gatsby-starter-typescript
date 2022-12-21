/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import { Footer } from 'components';

describe.skip('Header Component', () => {
  it('renders correctly with site title Props', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('footer').length).toEqual(1);
  });
});

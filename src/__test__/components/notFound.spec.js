import React from 'react';
import { mount } from 'enzyme';
import NotFound from '../../components/notFound/notFound';


describe('Not found component', () => {
  it('should render not found page', () => {
    const component = mount(<NotFound />);

    expect(component.find('NotFound').exists()).toBe(true);
  });
});

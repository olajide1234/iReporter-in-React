import React from 'react';
import { mount } from 'enzyme';
import Form from '../../components/form/form';

describe('Form', () => {
  it('render record create form', () => {
    const wrapper = mount(<Form />);

    expect(wrapper.find('.container_formfield').exists()).toBe(true);
  });
});

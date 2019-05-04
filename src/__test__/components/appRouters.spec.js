import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import AppRouter from '../../appRouters/AppRouter';
import NotFound from '../../components/notFound/notFound';

describe('App Router', () => {
  it('should go to notfound page', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/random']} initialIndex={0}>
        <AppRouter />
      </MemoryRouter>
    );
    expect(wrapper.find(NotFound)).toHaveLength(1);
  });
});

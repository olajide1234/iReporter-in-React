import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import HomePage from '../../containers/homepage';

describe('Homepage component', () => {
  const mockStore = configureStore([thunk]);
  let component;
  const stat = {
    redFlagDraft: '2',
    redFlagResolved: '0',
    redFlagInvestigation: '0',
    redFlagRejected: '0',
    interventionDraft: '5',
    interventionResolved: '0',
    interventionRejected: '0',
    interventionInvestigation: '0'
  };
  it('should render homepage correctly', () => {
    const store = mockStore({
      user: {
        isLoggedIn: false,
        currentUser: {}
      },
      recordsReducer: {
        records: {},
        record: {}
      },
      statReducer: stat
    });

    component = mount(
      <Provider store={store}>
        <MemoryRouter>
          <HomePage />
          , context:
          {}
          , attachTo: DOMElement
        </MemoryRouter>
      </Provider>
    );
    expect(component.find('.container').exists()).toBe(true);
  });
});

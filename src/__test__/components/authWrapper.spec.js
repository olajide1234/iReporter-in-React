import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import AuthWrapper from '../../components/authWrapper/authWrapper';


describe('Auth wrapper', () => {
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

  const record = {
    id: 23,
    owner_id: 23,
    createdon: null,
    createdby: 'default',
    type: 'intervention',
    dateofincident: '2019-05-02',
    title: 'deddd',
    comment: 'ffeee',
    images: 'www.null.com',
    videos: 'www.null.com',
    location: 'ddee',
    status: 'resolved'
  };
  it('should redirect to signin page', () => {
    const store = mockStore({
      user: {
        isLoggedIn: false,
        currentUser: null
      },
      recordsReducer: {
        records: {},
        record
      },
      statReducer: stat
    });

    const props = {
      isLoggedIn: true,
      component: '<SingleRecord/ >'
    };

    component = mount(
      <Provider store={store}>
        <MemoryRouter>
          <AuthWrapper {...props} />
          , context:
          {}
          , attachTo: DOMElement
        </MemoryRouter>
      </Provider>
    );
    expect(component.find('SignInPage').exists()).toBe(true);
  });
});

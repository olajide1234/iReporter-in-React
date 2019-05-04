import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import SingleRecord from '../../containers/singleRecord';


describe('Describes single record page', () => {
  const mockStore = configureStore([thunk]);
  let component;
  const record = {
    id: 23,
    owner_id: 31,
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

  const user = {
    id: 40,
    firstname: 'jejejej',
    lastname: 'ejejjejej',
    email: 'eeiekek@gmail.com',
    username: 'ejejjjejje',
    registered: '2019-05-04T00:00:00.000Z',
    isadmin: null,
    password: '$2b$08$d1ruzsjnYsfpi00mG8q5PuZ4YS.kka8rqkOPiqSDAysadgi0TSpza'
  };

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
  it('renders a single record correctly', () => {
    const store = mockStore({
      user: {
        isLoggedIn: true,
        currentUser: user
      },
      recordsReducer: {
        records: {},
        record
      },
      statReducer: stat
    });

    component = mount(
      <Provider store={store}>
        <MemoryRouter>
          <SingleRecord match={{ params: { id: '2' } }} />
          , context:
          {}
          , attachTo: DOMElement
        </MemoryRouter>
      </Provider>
    );
    expect(component.find('FullRecord').exists()).toBe(true);
  });
});

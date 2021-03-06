import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Header from '../../components/header/header';


describe('Display header component', () => {
  const logOut = jest.fn();
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
  const user = {
    id: 23,
    firstname: 'jejejej',
    lastname: 'ejejjejej',
    email: 'eeiekek@gmail.com',
    username: 'ejejjjejje',
    registered: '2019-05-04T00:00:00.000Z',
    isadmin: null,
    password: '$2b$08$d1ruzsjnYsfpi00mG8q5PuZ4YS.kka8rqkOPiqSDAysadgi0TSpza'
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
    status: 'draft'
  };
  it('should render header component correctly', () => {
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

    const props = {
      history: []
    };

    const prop = {
      user,
      props
    };

    component = mount(
      <Provider store={store}>
        <MemoryRouter>
          <Header {...prop} />
          , context:
          {}
          , attachTo: DOMElement
        </MemoryRouter>
      </Provider>
    );
    expect(component.find('Header').exists()).toBe(true);

    component.find('.test-logout').at(0).simulate('click');

    expect(logOut).toHaveBeenCalledTimes(0);
  });
});

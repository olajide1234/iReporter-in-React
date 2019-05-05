import mockAxios from 'axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as types from '../../../actions/actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Create new record action', () => {
  it('dispatches create new record action', async () => {
    const record = {
      data: [{
        new_record: {
          id: 8,
          owner_id: 23,
          createdon: null,
          createdby: 'default',
          type: 'red-flag',
          dateofincident: '2019-03-31',
          title: 'hggvt',
          comment: 'hbvg Line 21:  The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md',
          images: 'http://res.cloudinary.com/dqyytlxwe/image/upload/v1553877034/iReporter/Dell_Laptop_dtfh1h.jpg',
          videos: 'http://res.cloudinary.com/dqyytlxwe/image/upload/v1553877038/iReporter/Dell_Laptop_kgfw1j.jpg',
          location: 'gyu',
          status: 'resolved'
        }
      }]
    };

    const expectedActions = [{
      type: 'ADD_RECORD',
      record: {}
    }];

    mockAxios.post.mockImplementationOnce(() => Promise.resolve({
      data: { ...record }
    }));

    const store = mockStore();
    return store.dispatch(types.addRecord('testdata')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('dispatches empty array', async () => {
    const expectedActions = [{
      type: 'ADD_RECORD',
      record: {}
    }];

    mockAxios.post.mockImplementationOnce(() => Promise.reject(new Error('something bad happened')));

    const store = mockStore();
    return store.dispatch(types.addRecord('testdata')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('Get record action', () => {
  it('dispatches get record action', async () => {
    const record = {
      data: {
        data: [{
          new_record: {
            id: 8,
            owner_id: 23,
            createdon: null,
            createdby: 'default',
            type: 'red-flag',
            dateofincident: '2019-03-31',
            title: 'hggvt',
            comment: 'hbvg Line 21:  The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md',
            images: 'http://res.cloudinary.com/dqyytlxwe/image/upload/v1553877034/iReporter/Dell_Laptop_dtfh1h.jpg',
            videos: 'http://res.cloudinary.com/dqyytlxwe/image/upload/v1553877038/iReporter/Dell_Laptop_kgfw1j.jpg',
            location: 'gyu',
            status: 'resolved'
          }
        }]
      }
    };

    const expectedActions = [{
      type: 'GET_RECORD',
      record: {}
    }];

    mockAxios.post.mockImplementationOnce(() => Promise.resolve({
      record
    }));

    const store = mockStore();
    return store.dispatch(types.getRecord('testdata')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('dispatches empty array', async () => {
    const expectedActions = [{
      type: 'GET_RECORD',
      record: {}
    }];

    mockAxios.post.mockImplementationOnce(() => Promise.reject(new Error('something bad happened')));

    const store = mockStore();
    return store.dispatch(types.getRecord('testdata')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

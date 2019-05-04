import mockAxios from 'axios';
import * as types from '../../../actions/actions';

describe('Create new record action', () => {
  const dispatch = jest.fn();
  it('dispatches create new record action', async () => {
    const mockData = {
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

    mockAxios.post.mockImplementationOnce(() => Promise.resolve({
      data: mockData
    }));


    await types.addRecord()(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch.mock.calls[0][0].type).toEqual('ADD_RECORD');
  });

  it('dispatches empty array', async () => {
    mockAxios.post.mockImplementationOnce(() => Promise.reject(new Error('something bad happened')));

    await types.addRecord()(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch.mock.calls[0][0].type).toEqual('ADD_RECORD');
  });
});

describe('Create get record action', () => {
  const dispatch = jest.fn();
  it('dispatches get record action', async () => {
    const mockData = {
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


    mockAxios.post.mockImplementationOnce(() => Promise.resolve({
      data: mockData
    }));


    await types.getRecord()(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch.mock.calls[0][0].type).toEqual('GET_RECORD');
  });

  it('dispatches empty array', async () => {
    mockAxios.post.mockImplementationOnce(() => Promise.reject(new Error('something bad happened')));

    await types.getRecord()(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch.mock.calls[0][0].type).toEqual('GET_RECORD');
  });
});

describe('Create get multiple records action', () => {
  const dispatch = jest.fn();
  it('dispatches get multiple records action', async () => {
    const mockData = {
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


    mockAxios.post.mockImplementationOnce(() => Promise.resolve({
      data: mockData
    }));


    await types.getRecords()(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch.mock.calls[0][0].type).toEqual('GET_RECORDS');
  });

  it('dispatches empty array', async () => {
    mockAxios.post.mockImplementationOnce(() => Promise.reject(new Error('something bad happened')));

    await types.getRecords()(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch.mock.calls[0][0].type).toEqual('GET_RECORDS');
  });
});

describe('Create get record action', () => {
  const dispatch = jest.fn();
  it('dispatches get record action', async () => {
    const mockData = {
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


    mockAxios.post.mockImplementationOnce(() => Promise.resolve({
      data: mockData
    }));


    await types.getRecord()(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch.mock.calls[0][0].type).toEqual('GET_RECORD');
  });

  it('dispatches empty array', async () => {
    mockAxios.post.mockImplementationOnce(() => Promise.reject(new Error('something bad happened')));

    await types.getRecord()(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch.mock.calls[0][0].type).toEqual('GET_RECORD');
  });
});

describe('Delete record action', () => {
  const dispatch = jest.fn();
  it('dispatches delete record action', async () => {
    const mockData = {
      data: [{
        message: 'success'
      }]
    };


    mockAxios.post.mockImplementationOnce(() => Promise.resolve({
      data: mockData
    }));


    await types.deleteRecord()(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch.mock.calls[0][0].type).toEqual('DELETE_RECORD');
  });

  it('dispatches empty array', async () => {
    mockAxios.post.mockImplementationOnce(() => Promise.reject(new Error('something bad happened')));

    await types.getRecord()(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch.mock.calls[0][0].type).toEqual('GET_RECORD');
  });
});

describe('Edit location action', () => {
  const dispatch = jest.fn();
  it('dispatches edit location action', async () => {
    const mockData = {
      data: [{
        message: 'success'
      }]
    };


    mockAxios.post.mockImplementationOnce(() => Promise.resolve({
      data: mockData
    }));


    await types.editLocation()(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch.mock.calls[0][0].type).toEqual('EDIT_LOCATION');
  });

  it('dispatches empty array', async () => {
    mockAxios.post.mockImplementationOnce(() => Promise.reject(new Error('something bad happened')));

    await types.editLocation()(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch.mock.calls[0][0].type).toEqual('EDIT_LOCATION');
  });
});

describe('Edit comment action', () => {
  const dispatch = jest.fn();
  it('dispatches edit comment action', async () => {
    const mockData = {
      data: [{
        message: 'success'
      }]
    };


    mockAxios.post.mockImplementationOnce(() => Promise.resolve({
      data: mockData
    }));


    await types.editComment()(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch.mock.calls[0][0].type).toEqual('EDIT_COMMENT');
  });

  it('dispatches empty array', async () => {
    mockAxios.post.mockImplementationOnce(() => Promise.reject(new Error('something bad happened')));

    await types.editComment()(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch.mock.calls[0][0].type).toEqual('EDIT_COMMENT');
  });
});

describe('Signout action', () => {
  const dispatch = jest.fn();
  it('dispatches signout action', async () => {
    await types.signOut()(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch.mock.calls[0][0].type).toEqual('LOGOUT_USER');
  });
});

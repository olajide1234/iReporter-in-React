import mockAxios from 'jest-mock-axios';
import * as types from '../../../actions/stats';

describe('Get redflag draft record stats', () => {
  const dispatch = jest.fn();
  it('dispatches draft record stats action', async () => {
    const mockData = {
      status: 200,
      data: [
        {
          count: '1'
        }
      ]
    };

    mockAxios.post.mockImplementationOnce(() => Promise.resolve({
      mockData
    }));

    await types.redFlagDraft()(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch.mock.calls[0][0].type).toEqual('REDFLAG_DRAFT');
  });


  it('dispatches empty array', async () => {
    mockAxios.post.mockImplementationOnce(() => Promise.reject(new Error('something bad happened')));

    await types.redFlagDraft()(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch.mock.calls[0][0].type).toEqual('REDFLAG_DRAFT');
  });
});

describe('Get redflag resolved record stats', () => {
  const dispatch = jest.fn();
  it('dispatches resolved record stats action', async () => {
    const mockData = {
      status: 200,
      data: [
        {
          count: '1'
        }
      ]
    };

    mockAxios.post.mockImplementationOnce(() => Promise.resolve({
      mockData
    }));

    await types.redFlagResolved()(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch.mock.calls[0][0].type).toEqual('REDFLAG_RESOLVED');
  });


  it('dispatches empty array', async () => {
    mockAxios.post.mockImplementationOnce(() => Promise.reject(new Error('something bad happened')));

    await types.redFlagResolved()(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch.mock.calls[0][0].type).toEqual('REDFLAG_RESOLVED');
  });
});

describe('Get intervention resolved record stats', () => {
  const dispatch = jest.fn();
  it('dispatches resolved record stats action', async () => {
    const mockData = {
      status: 200,
      data: [
        {
          count: '1'
        }
      ]
    };

    mockAxios.post.mockImplementationOnce(() => Promise.resolve({
      mockData
    }));

    await types.interventionResolved()(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch.mock.calls[0][0].type).toEqual('INTERVENTION_RESOLVED');
  });


  it('dispatches empty array', async () => {
    mockAxios.post.mockImplementationOnce(() => Promise.reject(new Error('something bad happened')));

    await types.interventionResolved()(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch.mock.calls[0][0].type).toEqual('INTERVENTION_RESOLVED');
  });
});

import recordsReducer from '../../../reducers/recordReducer';

const recordsReducerDefaultState = {
  record: {},
  records: [{}]
};

const records = [
  {
    id: 8,
    owner_id: 23,
    createdon: null,
    createdby: 'default',
    type: 'red-flag',
    dateofincident: '2019-03-31',
    title: 'Placeholder title',
    comment: 'Some placeholder content',
    images: '',
    videos: '',
    location: 'Earth',
    status: 'resolved'
  }
];

const record = {
  id: 8,
  owner_id: 23,
  createdon: null,
  createdby: 'default',
  type: 'red-flag',
  dateofincident: '2019-03-31',
  title: 'Placeholder title',
  comment: 'Some placeholder content',
  images: '',
  videos: '',
  location: 'Earth',
  status: 'resolved'
};

const singleNewRecord = {
  type: 'ADD_RECORD',
  record
};

const newRecords = {
  type: 'GET_RECORDS',
  record: records
};

const newRecord = {
  type: 'GET_RECORD',
  record
};

const removeRecord = {
  type: 'REMOVE_RECORD',
  record: records
};

describe('record reducer', () => {
  it('should return correct state for single new record', () => {
    const state = recordsReducer(recordsReducerDefaultState, singleNewRecord);
    expect(state.record).toEqual(record);
  });

  it('should return correct state for multiple records', () => {
    const state = recordsReducer(recordsReducerDefaultState, newRecords);
    expect(state.records).toEqual(records);
  });

  it('should return correct state for single record', () => {
    const state = recordsReducer(recordsReducerDefaultState, newRecord);
    expect(state.record).toEqual(record);
  });

  it('should return default state after delete', () => {
    const state = recordsReducer(recordsReducerDefaultState, removeRecord);
    expect(state.records).toEqual([{}]);
  });

  it('should return default state', () => {
    const state = recordsReducer(recordsReducerDefaultState, {});
    expect(state.records).toEqual([{}]);
  });
});

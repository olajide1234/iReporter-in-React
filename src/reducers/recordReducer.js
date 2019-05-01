import { ADD_RECORD, REMOVE_RECORD, GET_RECORD } from '../actions/actionTypes';


const recordsReducerDefaultState = {
  record: {
    id: 9,
    owner_id: 24,
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
  },
  records: [
    {
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
  ]
};

const recordsReducer = (state = recordsReducerDefaultState, action) => {
  switch (action.type) {
    case ADD_RECORD:
      state.records.push({ ...action.record });
      return state;
    case GET_RECORD:
      return { ...state, record: action.record };
    case REMOVE_RECORD:
      return state;
    default:
      return state;
  }
};


export default recordsReducer;

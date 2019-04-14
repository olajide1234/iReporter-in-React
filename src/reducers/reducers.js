// Create reducers for both stores

const recordsReducerDefaultState = [
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
  },
  {
    id: 9,
    owner_id: 23,
    createdon: null,
    createdby: 'default',
    type: 'red-flag',
    dateofincident: '2019-03-31',
    title: 'hggvt',
    comment: 'hbvg',
    images: 'http://res.cloudinary.com/dqyytlxwe/image/upload/v1553877034/iReporter/Dell_Laptop_dtfh1h.jpg',
    videos: 'http://res.cloudinary.com/dqyytlxwe/image/upload/v1553877038/iReporter/Dell_Laptop_kgfw1j.jpg',
    location: 'gyu',
    status: 'under-investigation'
  },
  {
    id: 10,
    owner_id: 23,
    createdon: null,
    createdby: 'default',
    type: 'red-flag',
    dateofincident: '2019-03-31',
    title: 'hggvt',
    comment: 'hbvg',
    images: 'http://res.cloudinary.com/dqyytlxwe/image/upload/v1553877034/iReporter/Dell_Laptop_dtfh1h.jpg',
    videos: 'http://res.cloudinary.com/dqyytlxwe/image/upload/v1553877038/iReporter/Dell_Laptop_kgfw1j.jpg',
    location: 'gyu',
    status: 'draft'
  },
  {
    id: 11,
    owner_id: 23,
    createdon: null,
    createdby: 'default',
    type: 'red-flag',
    dateofincident: '2019-03-31',
    title: 'hggvt',
    comment: 'hbvg',
    images: 'http://res.cloudinary.com/dqyytlxwe/image/upload/v1553877034/iReporter/Dell_Laptop_dtfh1h.jpg',
    videos: 'http://res.cloudinary.com/dqyytlxwe/image/upload/v1553877038/iReporter/Dell_Laptop_kgfw1j.jpg',
    location: 'gyu',
    status: 'draft'
  }
];

export const recordsReducer = (state = recordsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_RECORD':
      state.push({ ...action.record });
      return state;
    case 'REMOVE_RECORD':
      return state;
    default:
      return state;
  }
};

// const filtersReducerDefaultState = {
//   text: "",
//   sortBy: "date",
//   startDate: undefined,
//   endDate: undefined
// };
// export const filtersReducer = (state = filtersReducerDefaultState, action) => {
//   switch (action.type) {
//     default:
//       return state;
//   }
// };

const userReducerDemo = {
  id: 9,
  firstname: 'Olajide',
  lastname: 'Ayinla',
  othernames: 'Tolani',
  email: 'ayinlaolajide@yahoo.com',
  phonenumber: '8185334904',
  username: 'olajideayinla',
  registered: '2019-03-27T00:00:00.000Z'
};


export const userReducer = (state = userReducerDemo, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return { ...action.user };
    default:
      return state;
  }
};

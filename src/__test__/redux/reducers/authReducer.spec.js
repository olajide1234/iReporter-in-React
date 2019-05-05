import userReducer from '../../../reducers/authReducer';

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

const userState = {
  isLoggedIn: false,
  currentUser: {}
};

const loginAction = {
  type: 'ADD_USER',
  user
};

const currentUserAction = {
  type: 'CURRENT_USER',
  user
};

const logoutAction = {
  type: 'LOGOUT_USER',
  user
};


describe('auth reducer', () => {
  it('should return correct state for login', () => {
    const state = userReducer(userState, loginAction);
    expect(state.isLoggedIn).toEqual(true);
  });

  it('should return correct state for login', () => {
    const state = userReducer(userState, currentUserAction);
    expect(state.isLoggedIn).toEqual(true);
  });

  it('should return correct state for login', () => {
    const state = userReducer(userState, logoutAction);
    expect(state.isLoggedIn).toEqual(false);
  });

  it('should return default state', () => {
    const state = userReducer(userState, {});
    expect(state.isLoggedIn).toEqual(false);
  });
});

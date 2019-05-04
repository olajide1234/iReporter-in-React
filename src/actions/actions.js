import axios from 'axios';
import {
  ADD_USER, GET_RECORD, GET_RECORDS, EDIT_COMMENT, EDIT_LOCATION, DELETE_RECORD, LOGOUT_USER
} from './actionTypes';

export const addRecord = record => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    if (record.type === 'red-flag') {
      const { data } = await axios({
        url: 'https://olajide-ireporter.herokuapp.com/api/v1/records/red-flags',
        method: 'POST',
        headers: {
          'x-access-token': token
        },
        data: record
      });

      dispatch({
        type: 'ADD_RECORD',
        record: data.data[0].new_record
      });

      return { type: 'success', data: data.data[0].new_record };
    }

    const { data } = await axios({
      url: 'https://olajide-ireporter.herokuapp.com/api/v1/records/interventions',
      method: 'POST',
      headers: {
        'x-access-token': token
      },
      data: record
    });

    dispatch({
      type: 'ADD_RECORD',
      record: data.data[0].new_record
    });

    return { type: 'success', data: data.data[0].new_record };
  } catch (error) {
    dispatch({
      type: 'ADD_RECORD',
      record: {}
    });

    if (error.response && error.response.data) { return { type: 'error', message: error.response.data.error }; }

    return { type: 'error', message: 'An error occured, please try later' };
  }
};


export const getRecord = id => async (dispatch) => {
  const token = localStorage.getItem('token');

  try {
    const { data } = await axios({
      url: `https://olajide-ireporter.herokuapp.com/api/v1/records/interventions/${id}`,
      method: 'GET',
      headers: {
        'x-access-token': token
      }
    });

    dispatch({
      type: GET_RECORD,
      record: data.data[0]
    });
    return data.data[0];
  } catch (error) {
    dispatch({
      type: GET_RECORD,
      record: {}
    });
  }
};

export const getRecords = () => async (dispatch) => {
  const token = localStorage.getItem('token');

  try {
    const { data } = await axios({
      url: 'https://olajide-ireporter.herokuapp.com/api/v1/records/interventions',
      method: 'GET',
      headers: {
        'x-access-token': token
      }
    });

    dispatch({
      type: GET_RECORDS,
      record: data.data
    });
    return data.data;
  } catch (error) {
    dispatch({
      type: GET_RECORDS,
      record: {}
    });
  }
};

export const addUser = userData => async (dispatch) => {
  try {
    const { data } = await axios.post('https://olajide-ireporter.herokuapp.com/api/v1/auth/signup', { ...userData });
    localStorage.setItem('token', data.data[0].token);
    localStorage.setItem('profile', JSON.stringify(data.data[0].user));

    dispatch({
      type: ADD_USER,
      user: data.data[0].user
    });
    return data;
  } catch (error) {
    dispatch({
      type: ADD_USER,
      user: {}
    });
    return error.response.data;
  }
};

export const signIn = userData => async (dispatch) => {
  try {
    const { data } = await axios.post('https://olajide-ireporter.herokuapp.com/api/v1/auth/signin', { ...userData });
    localStorage.setItem('token', data.data[0].token);
    localStorage.setItem('profile', JSON.stringify(data.data[0].user));
    dispatch({
      type: ADD_USER,
      user: data.data[0].user
    });
    return data;
  } catch (error) {
    dispatch({
      type: ADD_USER,
      user: {}
    });
    return error.response.data;
  }
};

export const editComment = (comment, id) => async (dispatch) => {
  const token = localStorage.getItem('token');
  try {
    const res = await axios({
      url: `https://olajide-ireporter.herokuapp.com/api/v1/records/interventions/${id}/comment`,
      method: 'PATCH',
      headers: {
        'x-access-token': token
      },
      data: { comment }
    });

    dispatch({
      type: EDIT_COMMENT,
      record: {}
    });

    return { type: 'success', message: res };
  } catch (error) {
    dispatch({
      type: EDIT_COMMENT,
      record: {}
    });

    if (error.response && error.response.data) { return { type: 'error', message: error.response.data.error }; }

    return { type: 'error', message: 'An error occured, please try later' };
  }
};

export const editLocation = (location, id) => async (dispatch) => {
  const token = localStorage.getItem('token');
  try {
    const res = await axios({
      url: `https://olajide-ireporter.herokuapp.com/api/v1/records/interventions/${id}/location`,
      method: 'PATCH',
      headers: {
        'x-access-token': token
      },
      data: { location }
    });

    dispatch({
      type: EDIT_LOCATION,
      record: {}
    });

    return { type: 'success', message: res };
  } catch (error) {
    dispatch({
      type: EDIT_LOCATION,
      record: {}
    });

    if (error.response && error.response.data) { return { type: 'error', message: error.response.data.error }; }

    return { type: 'error', message: 'An error occured, please try later' };
  }
};

export const deleteRecord = id => async (dispatch) => {
  const token = localStorage.getItem('token');
  try {
    const res = await axios({
      url: `https://olajide-ireporter.herokuapp.com/api/v1/records/interventions/${id}`,
      method: 'DELETE',
      headers: {
        'x-access-token': token
      },
      data: { id }
    });

    dispatch({
      type: DELETE_RECORD,
      record: {}
    });

    return { type: 'success', message: res };
  } catch (error) {
    dispatch({
      type: DELETE_RECORD,
      record: {}
    });

    if (error.response && error.response.data) { return { type: 'error', message: error.response.data.error }; }

    return { type: 'error', message: 'An error occured, please try later' };
  }
};

export const signOut = () => async (dispatch) => {
  try {
    dispatch({
      type: LOGOUT_USER,
      user: {}
    });
    return 'Success';
  } catch (error) {
    dispatch({
      type: LOGOUT_USER,
      user: {}
    });
    return 'Other errors';
  }
};

import axios from 'axios';
import { ADD_USER, GET_RECORD } from './actionTypes';

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

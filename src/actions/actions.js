import axios from 'axios';
// eslint-disable-next-line
import thunk from 'redux-thunk';

const userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIzLCJpYXQiOjE1NTM4NTIyNzEsImV4cCI6MTU1NDQ1NzA3MX0.ymi7ES-OgSHmaZmEeZ_28YIiR309HYkGDOAM37glZfw';


export const addRecord = record => async (dispatch) => {
  try {
    if (record.type === 'red-flag') {
      const { data } = await axios({
        url: 'https://olajide-ireporter.herokuapp.com/api/v1/records/red-flags',
        method: 'POST',
        headers: {
          'x-access-token': userToken
        },
        data: record
      });

      dispatch({
        type: 'ADD_RECORD',
        record: data.data[0].new_record
      });
      return data.data[0].new_record;
    }

    const { data } = await axios({
      url: 'https://olajide-ireporter.herokuapp.com/api/v1/records/interventions',
      method: 'POST',
      headers: {
        'x-access-token': userToken
      },
      data: record
    });

    dispatch({
      type: 'ADD_RECORD',
      record: data.data[0].new_record
    });

    return data.data[0].new_record;
  } catch (error) {
    dispatch({
      type: 'ADD_RECORD',
      record: {}
    });
    return error.response.data;
  }
};

export const addUser = userData => async (dispatch) => {
  try {
    const { data } = await axios.post('https://olajide-ireporter.herokuapp.com/api/v1/auth/signup', { ...userData });
    localStorage.setItem('token', data.data[0].token);
    dispatch({
      type: 'ADD_USER',
      user: data.data[0].user
    });
    return data;
  } catch (error) {
    dispatch({
      type: 'ADD_USER',
      user: {}
    });
    return error.response.data;
  }
};

export const signIn = userData => async (dispatch) => {
  try {
    const { data } = await axios.post('https://olajide-ireporter.herokuapp.com/api/v1/auth/signin', { ...userData });
    localStorage.setItem('token', data.data[0].token);
    dispatch({
      type: 'ADD_USER',
      user: data.data[0].user
    });
    return data;
  } catch (error) {
    dispatch({
      type: 'ADD_USER',
      user: {}
    });
    return error.response.data;
  }
};

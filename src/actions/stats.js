import axios from 'axios';
import {
  REDFLAG_DRAFT, REDFLAG_RESOLVED,
  REDFLAG_INVESTIGATION, REDFLAG_REJECTED,
  INTERVENTION_REJECTED, INTERVENTION_INVESTIGATION,
  INTERVENTION_RESOLVED, INTERVENTION_DRAFT
} from './actionTypes';


export const redFlagDraft = () => async (dispatch) => {
  const token = localStorage.getItem('token');

  try {
    const { data } = await axios({
      url: 'https://olajide-ireporter.herokuapp.com/api/v1/stats/rfdr',
      method: 'GET',
      headers: {
        'x-access-token': token
      }
    });

    dispatch({
      type: REDFLAG_DRAFT,
      record: data.data[0].count
    });
    return data.data[0].count;
  } catch (error) {
    dispatch({
      type: REDFLAG_DRAFT,
      record: {}
    });
  }
};

export const redFlagResolved = () => async (dispatch) => {
  const token = localStorage.getItem('token');

  try {
    const { data } = await axios({
      url: 'https://olajide-ireporter.herokuapp.com/api/v1/stats/rfrs',
      method: 'GET',
      headers: {
        'x-access-token': token
      }
    });

    dispatch({
      type: REDFLAG_RESOLVED,
      record: data.data[0].count
    });
    return data.data[0].count;
  } catch (error) {
    dispatch({
      type: REDFLAG_RESOLVED,
      record: {}
    });
  }
};

export const redFlagInvestigation = () => async (dispatch) => {
  const token = localStorage.getItem('token');

  try {
    const { data } = await axios({
      url: 'https://olajide-ireporter.herokuapp.com/api/v1/stats/rfiv',
      method: 'GET',
      headers: {
        'x-access-token': token
      }
    });

    dispatch({
      type: REDFLAG_INVESTIGATION,
      record: data.data[0].count
    });
    return data.data[0].count;
  } catch (error) {
    dispatch({
      type: REDFLAG_INVESTIGATION,
      record: {}
    });
  }
};

export const redFlagRejected = () => async (dispatch) => {
  const token = localStorage.getItem('token');

  try {
    const { data } = await axios({
      url: 'https://olajide-ireporter.herokuapp.com/api/v1/stats/rfrj',
      method: 'GET',
      headers: {
        'x-access-token': token
      }
    });

    dispatch({
      type: REDFLAG_REJECTED,
      record: data.data[0].count
    });
    return data.data[0].count;
  } catch (error) {
    dispatch({
      type: REDFLAG_REJECTED,
      record: {}
    });
  }
};

export const interventionRejected = () => async (dispatch) => {
  const token = localStorage.getItem('token');

  try {
    const { data } = await axios({
      url: 'https://olajide-ireporter.herokuapp.com/api/v1/stats/inrj',
      method: 'GET',
      headers: {
        'x-access-token': token
      }
    });

    dispatch({
      type: INTERVENTION_REJECTED,
      record: data.data[0].count
    });
    return data.data[0].count;
  } catch (error) {
    dispatch({
      type: INTERVENTION_REJECTED,
      record: {}
    });
  }
};

export const interventionInvestigation = () => async (dispatch) => {
  const token = localStorage.getItem('token');

  try {
    const { data } = await axios({
      url: 'https://olajide-ireporter.herokuapp.com/api/v1/stats/iniv',
      method: 'GET',
      headers: {
        'x-access-token': token
      }
    });

    dispatch({
      type: INTERVENTION_INVESTIGATION,
      record: data.data[0].count
    });
    return data.data[0].count;
  } catch (error) {
    dispatch({
      type: INTERVENTION_INVESTIGATION,
      record: {}
    });
  }
};

export const interventionResolved = () => async (dispatch) => {
  const token = localStorage.getItem('token');

  try {
    const { data } = await axios({
      url: 'https://olajide-ireporter.herokuapp.com/api/v1/stats/inrs',
      method: 'GET',
      headers: {
        'x-access-token': token
      }
    });

    dispatch({
      type: INTERVENTION_RESOLVED,
      record: data.data[0].count
    });
    return data.data[0].count;
  } catch (error) {
    dispatch({
      type: INTERVENTION_RESOLVED,
      record: {}
    });
  }
};


export const interventionDraft = () => async (dispatch) => {
  const token = localStorage.getItem('token');

  try {
    const { data } = await axios({
      url: 'https://olajide-ireporter.herokuapp.com/api/v1/stats/indr',
      method: 'GET',
      headers: {
        'x-access-token': token
      }
    });

    dispatch({
      type: INTERVENTION_DRAFT,
      record: data.data[0].count
    });
    return data.data[0].count;
  } catch (error) {
    dispatch({
      type: INTERVENTION_DRAFT,
      record: {}
    });
  }
};

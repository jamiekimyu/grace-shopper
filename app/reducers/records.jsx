import axios from 'axios';

/* ACTION CREATORS */
const receiveRecords = records => ({
  type: 'RECEIVE_RECORDS',
  records
});

export const getRecords = () => {

  return dispatch => {
    return axios.get('/api/records')
      .then(response => {
        dispatch(receiveRecords(response.data));
      });
    };

};

/* REDUCER */
const initialState = {
  records: []
};

const recordReducer = (state = initialState, action) => {

  const newState = Object.assign({}, state);

  switch (action.type) {

    case RECEIVE_RECORDS:
      newState.records = action.records;
      break;

    default:
      return state;

  }

  return newState;

};

export default recordReducer;

import axios from 'axios';

/* ACTION CREATORS */
const RECEIVE_RECORDS = 'RECEIVE_RECORDS';
const receiveRecords = records => ({
  type: RECEIVE_RECORDS,
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
// const initialState = {
//   records: []
// };

const recordReducer = (state = [], action) => {

  const newState = Object.assign({}, state);

  switch (action.type) {

    case RECEIVE_RECORDS:
      return action.records
      //newState.records = action.records;
      //break;

    default:
      return state;

  }

  //return newState;

};

export default recordReducer;

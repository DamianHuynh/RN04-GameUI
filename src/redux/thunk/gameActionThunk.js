import axios from 'axios';
import {
  requestListGameSuccess,
  requestListGameFailed,
  requestDetailGameSuccess,
  requestDetailGameFailed,
} from '../actions/gameAction';

export const requestListGame = () => {
  return async dispatch => {
    //call API
    try {
      //success => save response to store
      const response = await axios({
        method: 'GET',
        url: 'http://localhost:3000/games',
      });
      dispatch(requestListGameSuccess(response.data));
    } catch (error) {
      //failed => log error
      console.log(error);
      dispatch(requestListGameFailed(error));
    }
  };
};

export const requestDetailGame = id => {
  return async dispatch => {
    try {
      const response = await axios({
        method: 'GET',
        url: `http://localhost:3000/games/${id}`,
      });
      dispatch(requestDetailGameSuccess(response.data));
    } catch (error) {
      //failed => log error
      console.log(error);
      dispatch(requestDetailGameFailed(error));
    }
  };
};

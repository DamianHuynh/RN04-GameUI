import {mapLocalHostToIP} from '../../utils';
import {
  REQUEST_LIST_GAME_SUCCESS,
  REQUEST_DETAIL_GAME_SUCCESS,
} from '../actions/gameAction';

const initialState = {
  listGame: [],
  game: {},
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case REQUEST_LIST_GAME_SUCCESS:
      return {...state, listGame: mapLocalHostToIP(payload)};
    case REQUEST_DETAIL_GAME_SUCCESS:
      return {...state, game: mapLocalHostToIP(payload)};
    default:
      return state;
  }
};

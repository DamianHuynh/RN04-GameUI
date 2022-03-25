export const REQUEST_LIST_GAME_SUCCESS = 'REQUEST_LIST_GAME_SUCCESS';
export const REQUEST_LIST_GAME_FAILED = 'REQUEST_LIST_GAME_FAILED';
export const REQUEST_DETAIL_GAME_SUCCESS = 'REQUEST_DETAIL_GAME_SUCCESS';
export const REQUEST_DETAIL_GAME_FAILED = 'REQUEST_DETAIL_GAME_FAILED';

export function requestListGameSuccess(payload) {
  return {
    type: REQUEST_LIST_GAME_SUCCESS,
    payload,
  };
}
export function requestListGameFailed(payload) {
  return {
    type: REQUEST_LIST_GAME_FAILED,
    payload,
  };
}

export function requestDetailGameSuccess(payload) {
  return {
    type: REQUEST_DETAIL_GAME_SUCCESS,
    payload,
  };
}
export function requestDetailGameFailed(payload) {
  return {
    type: REQUEST_DETAIL_GAME_FAILED,
    payload,
  };
}

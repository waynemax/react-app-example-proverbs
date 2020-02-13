import * as actionTypes from '../constants/actionTypes';
import * as constants from '../constants';

const initialState = {
  faves: {},
  loadingStatus: {
    defaultFaves: constants.LOADING_STATUS_IN_PROCESS,
    appendFaves: constants.LOADING_STATUS_OK
  },
};

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.FAVES_SET_LOADING_STATUS: {
      return Object.assign({}, state, {
        loadingStatus: Object.assign({}, state.loadingStatus, {[action.section]: action.status})
      });
    }

    case actionTypes.FAVES_SET: {
      return Object.assign({}, state, {
        faves: action.data
      });
    }

    case actionTypes.FAVES_APPEND: {
      return {
        ...state,
        faves: {
          ...state.faves,
          items: [...state.faves.items, ...action.data.items],
          cursor: action.data.cursor,
          hasNext: action.data.hasNext
        }
      }
    }

    default: return state;
  }
}

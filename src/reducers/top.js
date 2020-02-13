import * as actionTypes from '../constants/actionTypes';
import * as constants from '../constants';

const initialState = {
  top: {},
  loadingStatus: {
    defaultTop: constants.LOADING_STATUS_IN_PROCESS
  },
};

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.TOP_SET_LOADING_STATUS: {
      return Object.assign({}, state, {
        loadingStatus: Object.assign({}, state.loadingStatus, {[action.section]: action.status})
      });
    }

    case actionTypes.TOP_SET: {
      return Object.assign({}, state, {
        top: action.data
      });
    }

    default: return state;
  }
}

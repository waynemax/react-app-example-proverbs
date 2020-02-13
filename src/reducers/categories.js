import * as actionTypes from '../constants/actionTypes';
import * as constants from '../constants';

const initialState = {
  categories: [],
  loadingStatus: {
    defaultCategories: constants.LOADING_STATUS_IN_PROCESS
  },
};

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.CATEGORIES_SET_LOADING_STATUS: {
      return Object.assign({}, state, {
        loadingStatus: Object.assign({}, state.loadingStatus, {[action.section]: action.status})
      });
    }

    case actionTypes.CATEGORIES_SET: {
      return Object.assign({}, state, {
        categories: action.data
      });
    }

    default: return state;
  }
}

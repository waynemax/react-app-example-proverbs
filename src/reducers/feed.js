import * as actionTypes from '../constants/actionTypes';
import * as constants from '../constants';

const initialState = {
  feed: {},
  loadingStatus: {
    defaultFeed: constants.LOADING_STATUS_IN_PROCESS,
    appendFeed: constants.LOADING_STATUS_OK
  },
};

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.FEED_SET_LOADING_STATUS: {
      return Object.assign({}, state, {
        loadingStatus: Object.assign({}, state.loadingStatus, {[action.section]: action.status})
      });
    }

    case actionTypes.FEED_SET: {
      return Object.assign({}, state, {
        feed: action.data
      });
    }

    case actionTypes.FEED_APPEND: {
      return {
        ...state,
        feed: {
          ...state.feed,
          items: [...state.feed.items, ...action.data.items],
          cursor: action.data.cursor,
          hasNext: action.data.hasNext
        }
      }
    }

    default: return state;
  }
}

import axios from 'axios';
import * as actionTypes from '../../constants/actionTypes';
import * as apiRoutes from '../../constants/apiRoutes';
import * as api from '../../services/api';
import store from '../../store';
import * as constants from '../../constants';

export function loadProverbs({query}) {
  return dispatch => {
    axios({
      method: apiRoutes.proverbs.search.method,
      url: apiRoutes.proverbs.search.path,
      params: {unique: true, search: query, count: query.length > 0 ? 5 : 15}
    })
      .then(data => {
        data = api.queryTreatment(data).response;
        dispatch({
          type: actionTypes.FEED_SET,
          data
        });
        dispatch({
          type: actionTypes.FEED_SET_LOADING_STATUS,
          section: 'defaultFeed',
          status: constants.LOADING_STATUS_OK
        });
      })
      .catch(error => {
        dispatch({
          type: actionTypes.FEED_SET_LOADING_STATUS,
          section: 'defaultFeed',
          status: constants.LOADING_STATUS_FAIL
        });
      })
      .then(() => {});
  }
}

export function appendProverbs({query}) {
  return dispatch => {
    dispatch({type: actionTypes.FEED_SET_LOADING_STATUS, section: 'append', status: 'loading'});
    axios({
      method: apiRoutes.proverbs.search.method,
      url: apiRoutes.proverbs.search.path,
      params: {unique: true, search: query, count: 30, offset: store.getState().feed.feed.cursor}
    })
      .then((data) => {
        data = api.queryTreatment(data).response;
        dispatch({
          type: actionTypes.FEED_APPEND,
          data
        });
        dispatch({
          type: actionTypes.FEED_SET_LOADING_STATUS,
          section: 'appendFeed',
          status: constants.LOADING_STATUS_OK
        });
      })
      .catch((error) => {
        dispatch({
          type: actionTypes.FEED_SET_LOADING_STATUS,
          section: 'appendFeed',
          status: constants.LOADING_STATUS_FAIL
        });
      })
      .then(() => {});
  };
}
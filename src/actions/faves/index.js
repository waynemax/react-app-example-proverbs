import axios from 'axios';
import * as actionTypes from '../../constants/actionTypes';
import * as apiRoutes from '../../constants/apiRoutes';
import * as api from '../../services/api';
import store from '../../store';
import * as constants from '../../constants';

export function loadFavesProverbs() {
  return dispatch => {
    axios({
      method: apiRoutes.proverbs.search.method,
      url: apiRoutes.proverbs.search.path,
      params: {faves: true, count: 20}
    })
      .then((data) => {
        data = api.queryTreatment(data).response;
        dispatch({
          type: actionTypes.FAVES_SET,
          data
        });
        dispatch({
          type: actionTypes.FAVES_SET_LOADING_STATUS,
          section: 'defaultFaves',
          status: constants.LOADING_STATUS_OK
        });
      })
      .catch((error) => {
        dispatch({
          type: actionTypes.FAVES_SET_LOADING_STATUS,
          section: 'defaultFaves',
          status: constants.LOADING_STATUS_FAIL
        });
      })
      .then(() => {});
  };
}

export function appendFavesProverbs() {
  return dispatch => {
    dispatch({type: actionTypes.FAVES_SET_LOADING_STATUS, section: 'append', status: 'loading'});
    axios({
      method: apiRoutes.proverbs.search.method,
      url: apiRoutes.proverbs.search.path,
      params: {faves: true, count: 50, offset: store.getState().faves.faves.cursor}
    })
      .then((data) => {
        data = api.queryTreatment(data).response;
        dispatch({
          type: actionTypes.FAVES_APPEND,
          data
        });
        dispatch({
          type: actionTypes.FAVES_SET_LOADING_STATUS,
          section: 'appendFaves',
          status: constants.LOADING_STATUS_OK
        });
      })
      .catch((error) => {
        dispatch({
          type: actionTypes.FAVES_SET_LOADING_STATUS,
          section: 'appendFaves',
          status: constants.LOADING_STATUS_FAIL
        });
      })
      .then(() => {});
  };
}
import axios from 'axios';
import * as actionTypes from '../../constants/actionTypes';
import * as apiRoutes from '../../constants/apiRoutes';
import * as api from '../../services/api';
import store from '../../store';
import * as constants from '../../constants';

export function loadUnique(next = false) {
  return next || store.getState().unique.loadingStatus.defaultUnique === constants.LOADING_STATUS_IN_PROCESS ? dispatch => {
    axios({
      method: apiRoutes.proverbs.search.method,
      url: apiRoutes.proverbs.search.path,
      params: {unique: true, rand: true, count: 1}
    })
      .then((data) => {
        data = api.queryTreatment(data);
        dispatch({
          type: actionTypes.UNIQUE_SET,
          data
        });
        dispatch({
          type: actionTypes.UNIQUE_SET_LOADING_STATUS,
          section: 'defaultUnique',
          status: constants.LOADING_STATUS_OK
        });
      })
      .catch((error) => {
        dispatch({
          type: actionTypes.UNIQUE_SET_LOADING_STATUS,
          section: 'defaultUnique',
          status: constants.LOADING_STATUS_FAIL
        });
      })
      .then(() => {});
  } : () => {};
}
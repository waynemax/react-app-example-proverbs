import axios from 'axios';
import * as actionTypes from '../../constants/actionTypes';
import * as apiRoutes from '../../constants/apiRoutes';
import * as api from '../../services/api';
import store from '../../store';
import * as constants from '../../constants';

export function loadTopProverbs() {
  return store.getState().top.loadingStatus.defaultTop === constants.LOADING_STATUS_IN_PROCESS ? dispatch => {
    axios({
      method: apiRoutes.proverbs.search.method,
      url: apiRoutes.proverbs.search.path,
      params: {top: true, count: 100}
    })
      .then((data) => {
        data = api.queryTreatment(data).response;
        dispatch({
          type: actionTypes.TOP_SET,
          data
        });
        dispatch({
          type: actionTypes.TOP_SET_LOADING_STATUS,
          section: 'defaultTop',
          status: constants.LOADING_STATUS_OK
        });
      })
      .catch((error) => {
        dispatch({
          type: actionTypes.TOP_SET_LOADING_STATUS,
          section: 'defaultTop',
          status: constants.LOADING_STATUS_FAIL
        });
      })
      .then(() => {});
  } : () => {};
}
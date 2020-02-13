import axios from 'axios';
import * as actionTypes from '../../constants/actionTypes';
import * as apiRoutes from '../../constants/apiRoutes';
import * as api from '../../services/api';
import store from '../../store';
import * as constants from '../../constants';

export function loadCategories() {
  return store.getState().categories.loadingStatus.defaultCategories !== constants.LOADING_STATUS_IN_PROCESS ? () => {} : dispatch => {
    axios({
      method: apiRoutes.proverbs.categories.method,
      url: apiRoutes.proverbs.categories.path
    })
      .then((data) => {
        data = api.queryTreatment(data);
        dispatch({
          type: actionTypes.CATEGORIES_SET,
          data
        });
        dispatch({
          type: actionTypes.CATEGORIES_SET_LOADING_STATUS,
          section: 'defaultCategories',
          status: constants.LOADING_STATUS_OK
        });
      })
      .catch((error) => {
        dispatch({
          type: actionTypes.CATEGORIES_SET_LOADING_STATUS,
          section: 'defaultCategories',
          status: constants.LOADING_STATUS_FAIL
        });
      })
      .then(() => {});
  };
}
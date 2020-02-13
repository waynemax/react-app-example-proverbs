import axios from 'axios';
import * as apiRoutes from '../../constants/apiRoutes';
import * as api from '../../services/api';
import querystring from 'query-string';

export function searchProverbs({id, search, cat_id, offset, count, unique}) {
  return new Promise((resolve, reject) => {
    axios({
      method: apiRoutes.proverbs.search.method,
      url: apiRoutes.proverbs.search.path,
      params: {id, search, cat_id, offset, count, unique}
    })
      .then((data) => {
        data = api.queryTreatment(data);
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      })
      .then(() => {});
  });
}

export function addView({subject_id}) {
  return new Promise((resolve, reject) => {
    axios({
      method: apiRoutes.proverbs.addView.method,
      url: apiRoutes.proverbs.addView.path,
      data: querystring.stringify({subject_id}),
    })
      .then((data) => {
        data = api.queryTreatment(data);
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      })
      .then(() => {});
  });
}

export function addLike({subject_id}) {
  return new Promise((resolve, reject) => {
    axios({
      method: apiRoutes.proverbs.addLike.method,
      url: apiRoutes.proverbs.addLike.path,
      data: querystring.stringify({subject_id}),
    })
      .then((data) => {
        data = api.queryTreatment(data);
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      })
      .then(() => {});
  });
}

export function removeLike({subject_id}) {
  return new Promise((resolve, reject) => {
    axios({
      method: apiRoutes.proverbs.removeLike.method,
      url: apiRoutes.proverbs.removeLike.path,
      data: querystring.stringify({subject_id}),
    })
      .then((data) => {
        data = api.queryTreatment(data);
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      })
      .then(() => {});
  });
}

export function toggleLike({subject_id}) {
  return new Promise((resolve, reject) => {
    axios({
      method: apiRoutes.proverbs.toggleLike.method,
      url: apiRoutes.proverbs.toggleLike.path,
      data: querystring.stringify({subject_id}),
    })
      .then((data) => {
        data = api.queryTreatment(data);
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      })
      .then(() => {});
  });
}

export function addFave({subject_id}) {
  return new Promise((resolve, reject) => {
    axios({
      method: apiRoutes.proverbs.addFave.method,
      url: apiRoutes.proverbs.addFave.path,
      data: querystring.stringify({subject_id}),
    })
      .then((data) => {
        data = api.queryTreatment(data);
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      })
      .then(() => {});
  });
}

export function removeFave({subject_id}) {
  return new Promise((resolve, reject) => {
    axios({
      method: apiRoutes.proverbs.removeFave.method,
      url: apiRoutes.proverbs.removeFave.path,
      data: querystring.stringify({subject_id}),
    })
      .then((data) => {
        data = api.queryTreatment(data);
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      })
      .then(() => {});
  });
}
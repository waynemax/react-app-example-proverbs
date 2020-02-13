import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {reduxPlugin} from 'redux-router5';
import router from './router';
import {router5Middleware, router5Reducer} from 'redux-router5';

import main from './reducers';
import categories from './reducers/categories';
import unique from './reducers/unique';
import feed from './reducers/feed';
import top from './reducers/top';
import faves from './reducers/faves';

let store;
export function getStore() {
  store = createStore(combineReducers({
    router: router5Reducer,
    main, categories, unique, feed, faves, top
  }), applyMiddleware(
    thunk, router5Middleware(router)
  ));
  router.usePlugin(
    reduxPlugin(store.dispatch)
  );
}

getStore();

export default store;

import './assets/app.less';
import './assets/gradients.less';

import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';

import mVKMiniAppsScrollHelper from './services/mVKMiniAppsScrollHelper';

import "core-js/es6/map";
import "core-js/es6/set";

import 'url-search-params-polyfill';

import AppHelper from './helpers/index';

import Framework7 from 'framework7/framework7.esm.bundle';
import Framework7React from 'framework7-react';

import 'framework7/css/framework7.bundle.css';

import {App} from 'framework7-react';
import Application from './App';

import {Provider} from 'react-redux';
import {RouterProvider} from 'react-router5';

import store from './store';
import router from './router';

import initGetParams from './services/initialGetParams';
const initGetParamsData = initGetParams;

const f7params = {
  id: 'io.framework7.testapp',
  name: 'App.Name',
  theme: 'auto',
};

let f7app = Framework7.use(Framework7React);

const app = <Provider store={store}>
  <AppHelper initGetParamsData={initGetParamsData}>
    <RouterProvider router={router}>
      <App params={f7params}>
        <Application store={store} router={router} f7app={f7app} />
      </App>
    </RouterProvider>
  </AppHelper>
</Provider>;

const root = document.getElementById('root');

mVKMiniAppsScrollHelper(root);

router.start((err, state) => {
  ReactDOM.render(app, root)
});

serviceWorker.register();


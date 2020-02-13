import createRouter from 'router5';
import browserPlugin from 'router5-plugin-browser';
//import listenersPlugin from 'router5-plugin-listeners';

import * as routesConstants from './constants/routes';

export const routes = [
  {
    name: routesConstants.FEED,
    path: '/',
  },
  // {
  //   name: routesConstants.FEED,
  //   path: '/feed',
  // },
  {
    name: routesConstants.NOT_FOUND,
    path: '/not_found',
  },
  {
    name: routesConstants.TOP,
    path: '/top',
  },
  {
    name: routesConstants.CATEGORIES,
    path: '/categories',
  },
  {
    name: routesConstants.SETTINGS,
    path: '/settings',
  },
  {
    name: routesConstants.FAVES,
    path: '/faves',
  },
  {
    name: routesConstants.SHARE,
    path: '/share',
  }
];

const params = {
  defaultRoute: routesConstants.NOT_FOUND,
  defaultParams: {},
  strictQueryParams: true,
  trailingSlash: true,
  useTrailingSlash: false,
  queryParamsMode: 'loose',
};

let router = createRouter(routes, params);
router.usePlugin(browserPlugin({
  base: '',
  useHash: false,
  hashPrefix: '',
  mergeState: true,
  preserveHash: false,
  forceDeactivate: true,
}));
//router.usePlugin(listenersPlugin());

export default router;

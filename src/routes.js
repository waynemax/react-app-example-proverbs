import React from 'react';
import BaseWrapper from './wrappers/BaseWrapper';
import * as routes from './constants/routes';

import UniquePage from './containers/Unique';
import TopPage from './containers/Top';
import CategoriesPage from './containers/Categories';

import FeedPage from './containers/Feed';
import FavesPage from './containers/Faves';
import SettingsPage from './containers/Settings';
import SharePage from './containers/Share';
import NotFoundPage from './containers/NotFoundPage';

export default function Routes(props) {

  const routeState = props.router.getState();
  const routerParams = routeState.params;
  const route = routeState.name;

  let actions = {};
  let Component = false;
  let Wrapper = BaseWrapper;

  switch (route) {
    case routes.FEED:
      Component = FeedPage;
      break;
    case routes.CATEGORIES:
      Component = CategoriesPage;
      break;
    case routes.TOP:
      Component = TopPage;
      break;
    case routes.FAVES:
      Component = FavesPage;
      break;
    case routes.UNIQUE:
      Component = UniquePage;
      break;
    case routes.SETTINGS:
      Component = SettingsPage;
      break;
    case routes.SHARE:
      Component = SharePage;
      break;
    default:
      Component = NotFoundPage;
      break;
  }

  if (!Component) {
    return <h1>404 Not Found</h1>;
  }

  const defaultProps = {
    state: props.state.main,
    router: props.router,
    f7app: props.f7app
  };

  return <Wrapper {...defaultProps} {...actions}>
    <Component {...defaultProps} {...actions} routerParams={routerParams} />
  </Wrapper>
}
import './index.less';
import React from 'react';
import {Page} from 'framework7-react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Content from '../../components/Content/Content';
import SVG from 'react-inlinesvg';
import * as routes from '../../constants/routes';

function Wrapper(props) {
  const urlPath = props.router.getState().name;

  return <div className="BaseWrapper">
    <div className="BaseWrapper__center">
      <Page>
        <Header
          router={props.router}
        />
        <Content>
          {props.children}
        </Content>
        <Footer
          router={props.router}
          tabs={[
            {
              title: "Feed",
              active: (urlPath === 'feed'),
              route: routes.FEED,
              icon: <SVG src={require('../../components/Footer/assets/home.svg')} />
            },
            // {
            //   title: "Unique",
            //   active: (urlPath === 'unique'),
            //   route: routes.UNIQUE,
            //   icon: <SVG src={require('../../components/Footer/assets/unique.svg')} />
            // },
            {
              title: "Top",
              active: (urlPath === 'top'),
              route: routes.TOP,
              icon: <SVG src={require('../../components/Footer/assets/top.svg')} />
            },
            // {
            //   title: "Categories",
            //   active: (urlPath === 'categories'),
            //   route: routes.CATEGORIES,
            //   icon: <SVG src={require('../../components/Footer/assets/categories.svg')} />
            // },
            {
              title: "Faves",
              active: (urlPath === 'faves'),
              route: routes.FAVES,
              icon: <SVG src={require('../../components/Footer/assets/fave.svg')} />
            }
          ]}
        />
      </Page>
    </div>
  </div>
}

export default Wrapper;
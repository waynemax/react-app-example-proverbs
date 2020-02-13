import React from 'react';
import querystring from 'query-string';
import vkConnect from '@vkontakte/vkui-connect';
import axios from 'axios';
import initGetParams from '../services/initialGetParams';
import * as themes from '../services/themes';

const LIGHT = 'app_light';
const DARK = 'app_dark';

axios.defaults.headers['Sign'] = '' + initGetParams.href;

export default class AppHelper extends React.Component {
  componentDidMount() {
    vkConnect.subscribe((e) => {
      if (e.detail.hasOwnProperty('type')) {
        switch (e.detail.type) {
          case 'VKWebAppUpdateConfig':
            if (!themes.themeIsInited()) {
              switch (e.detail.data.appearance) {
                case 'light':
                  themes.setTheme(LIGHT);
                  break;
                case 'dark':
                  themes.setTheme(DARK);
                  break;
                default: break;
              }
            }
            break;
          case 'VKWebAppGetUserInfoResult':
            axios({
              method: 'post',
              url: 'https://api.devimperial.com/api/users.init',
              data: querystring.stringify({...e.detail.data}),
            })
              .then(function (response) {

              })
              .catch(function (error) {
                console.error(1, error);
              })
              .then(function () {
                // always executed
              });

            //store.dispatch(memberSetMember(e.detail.data));
            break;
          default:break;
        }
      }
    });
    //vkConnect.send("VKWebAppGetAuthToken", {"app_id": config.app.id, "scope": "friends"});
  }

  componentWillMount() {
    vkConnect.send('VKWebAppInit', {});
  }

  render() {
    return this.props.children;
  }
}


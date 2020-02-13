import React, {Component} from 'react';
import './Header.less';
import classNames from "classnames";
import * as routes from '../../constants/routes';
import SVG from 'react-inlinesvg';
import onTap from 'react-tap-or-click'

class Header extends Component {
  render() {
    let classnamesLeftTab = classNames({
      Header__left_tab: true,
      active: (this.props.router.getState().name === routes.SETTINGS) || false
    });
    return <div>
      <div className="Header__fake">
      </div>
      <div className="Header__main">
        <div className="Header__left">
          <div
            className={classnamesLeftTab}
            {...onTap(() => {
              this.props.router.navigate(routes.SETTINGS)
            })}
          >
            <SVG src={require('./assets/settings.svg')} />
          </div>
          {/*<BaseLink className={classnamesLeftTab} router={this.props.router} routeName={routes.SETTINGS}>*/}
            {/*<SVG src={require('./assets/settings.svg')} />*/}
          {/*</BaseLink>*/}
        </div>
        <div className="Header__logo">
        </div>
        <div className="Header__right">
        </div>
      </div>
    </div>
  }
}

export default Header;
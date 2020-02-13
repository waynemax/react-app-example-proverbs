import React, {Component} from 'react';
import './Footer.less';
import { BaseLink } from 'react-router5';
import classNames from 'classnames';
import onTap from 'react-tap-or-click'

class Footer extends Component {
  render() {
    return <div>
      <div className="Footer__fake">
      </div>
      <div className="Footer__main">
        {this.props.tabs.map((tab, i) => {
          let classnamesTab = classNames({
            Footer__tab: true,
            active: tab.active || false
          });
          return <div
            {...onTap(() => {
              this.props.router.navigate(tab.route)
            })}
            className={classnamesTab}
            key={i}
          >
            {tab.icon}
          </div>})
          // return <BaseLink className={classnamesTab} key={i} router={this.props.router} routeName={tab.route}>
          //   {tab.icon}
          // </BaseLink>})
        }
      </div>
    </div>
  }
}

export default Footer;
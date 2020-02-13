import './Content.less';
import React, {Component} from 'react';

class Content extends Component {
  render() {
    return <div className="Content--main">
      {this.props.children}
    </div>
  }
}

export default Content;
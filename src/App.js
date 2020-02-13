import React from 'react';
import { connect } from 'react-redux';

import Routes from './routes';
import * as themes from './services/themes';

class index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    this._loadAssets();
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div>Loading...</div>
      )
    }

    return (
      <div>
        <Routes {...this.props} />
      </div>
    )
  }

  _loadAssets = () => {
    themes.themeInit();
    this.setState({
      isLoading: false
    });
  };
}

export function mapDispatchToProps(dispatch) {
  return {}
}

export default connect((state) => {
  return {state};
}, mapDispatchToProps)(index);
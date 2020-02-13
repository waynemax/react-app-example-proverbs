import React from 'react';

export default class BaseScreen extends React.PureComponent {
  get section() {
    return this.props.routerParams.section || 'default';
  }

  get isLoading() {
    return !!this.props.loadingStatus[this.section];
  }

  componentDidMount() {
    this.__load();
  }

  componentWillUpdate(nextProps) {
    if (nextProps.routerParams.section !== this.props.routerParams.section) {
      this.__load(nextProps.routerParams.section || 'default');
    }
  }

  __load() {}
}
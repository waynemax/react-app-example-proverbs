import React, {Component} from 'react';
import PropTypes from "prop-types"

export default class Index extends Component {
  static propTypes = {
    showIf: PropTypes.bool
  };

  render() {
    return this.props.showIf ? this.props.children : <></>;
  }
}
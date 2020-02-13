import React from 'react';
import MoreButton from './components/MoreButton';
import "./pagination.less"

class Pagination extends React.PureComponent {
  state = {
    block: false
  };

  __setBlock = () => {
    this.setState({
      block: true
    }, () => {
      setTimeout(() => {
        this.setState({
          block: false
        });
      }, 1000);
    })
  };

  componentDidMount() {
    document.querySelector('.page-content').addEventListener('scroll', this.__onScrollHandler);
  }

  componentWillUnmount() {
    document.querySelector('.page-content').removeEventListener('scroll', this.__onScrollHandler);
  }

  __onScrollHandler = (e) => {
    if (!this.props.hasNext) {
      return;
    }

    let bottomPoint = document.querySelector('.page-content').scrollTop + window.innerHeight,
      scrollHeight = document.querySelector('.page-content').scrollHeight;
    let needPercent = (scrollHeight / 100) * 95;

    if (bottomPoint > needPercent) {
      if (!this.state.block) {
        this.props.loadingMore();
        this.__setBlock();
      }
    }
  };

  render() {
    return <div>
      {this.props.children}
      {this.props.hasNext && <MoreButton
        loadingStatus={this.props.loadingStatus}
        onClick={this.props.loadingMore}
      />}
    </div>
  }
}

Pagination.defaultProps = {
  loadingMore: () => {},
  loadingStatus: true
};

export default Pagination;

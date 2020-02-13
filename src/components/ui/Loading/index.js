import './loading.less';
import React  from 'react';
import SVG from 'react-inlinesvg';

class Loading extends React.Component {
  render() {
    return (
      <div
        className="Loading"
      >
        <SVG src={require('./loading.svg')} />
      </div>
    )
  }
}

export default React.memo(Loading);

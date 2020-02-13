import React, {Component} from 'react';
import SVG from 'react-inlinesvg';
import "./isEmptyHandler.less";

class IsEmptyHandler extends Component {
  render() {
    let counter = '';
    const props = {...this.props};
    if (props.counter < 1) {
      return <div className="IsEmptyHandler__main">
        <SVG src={require('./assets/mainIcon.svg')} />
        <span>
          <div>{props.text}</div>
          <div>¯\_(ツ)_/¯</div>
        </span>
      </div>
    } else if (props.showCounter) {
      counter = <div className="IsEmptyHandler__counter_main">
        <div className="IsEmptyHandler__counterText">
          {props.counterText}
        </div>
        <div className="IsEmptyHandler__counter">
          {props.counter}
        </div>
      </div>
    }
    return <div>
      {counter}
      {props.children}
    </div>
  }
}

IsEmptyHandler.defaultProps = {
  counter: 0,
  counterText: 'изречений',
  showCounter: false,
  text: 'Похоже здесь ничего нет'
};

export default IsEmptyHandler;
import './input.less';

import React  from 'react';
import classNames from 'classnames';

class Input extends React.Component {
  render() {
    const Input__wrapper = 'Input__wrapper';
    const InputWrapper = this.props.classNameWrapper ? Input__wrapper + ' ' + this.props.classNameWrapper : Input__wrapper;

    let params = {
      className: classNames({Input: true, error: this.props.error}),
      placeholder: this.props.placeholder,
      type: this.props.type,
      autoComplete: this.props.autoComplete,
      autoFocus: this.props.autoFocus,
      onKeyPress: this.props.onKeyPress,
      readOnly: this.props.readOnly,
      onFocus: this.props.onFocus,
      required: true,
    };

    return (
      <div
        className={InputWrapper}
        onClick={this.props.onClick}
      >
        <input
          ref="input"
          {...params}
          value={this.props.value}
          onChange={this.__onChange}
          disabled={this.props.disabled}
          autoFocus={this.props.autoFocus}
        />
      </div>
    )
  }

  __onChange = (e) => {
    this.props.onChange(e);
    this.props.onTextChange(e.target.value);
  };
}

Input.defaultProps = {
  classNameWrapper: '',
  disabled: false,
  error: false,
  autoFocus: false,
  onClick: () => {},
  onChange: () => {},
  onTextChange: () => {}
};

export default React.memo(Input);

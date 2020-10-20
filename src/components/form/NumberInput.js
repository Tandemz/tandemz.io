import React from 'react';
import classnames from 'classnames';

class NumberInput extends React.PureComponent {
  static defaultProps = {
    onValueChange: () => {},
    step: 1,
  };

  constructor(props) {
    super();
    this.state = {
      value: props.value !== undefined ? props.value : props.defaultValue,
    };
  }

  changeValue(value) {
    if (this.props.value !== undefined) {
      // controlled state
      this.props.onValueChange(value);
      return;
    }
    this.setState({ value });
  }

  onInputChange = (e) => {
    this.changeValue(e.currentTarget.value);
  };

  getValue() {
    const val =
      this.props.value !== undefined ? this.props.value : this.state.value;
    const numberVal = parseInt(val);
    if (Number.isNaN(numberVal)) {
      return undefined;
    }
    return numberVal;
  }

  addToValue(sign) {
    const { min, max, step } = this.props;
    const add = step
      ? typeof step === 'string'
        ? sign * parseInt(step)
        : sign * step
      : sign;

    const value = this.getValue() || 0;

    let finalValue = value + add;
    if (min !== undefined && typeof min === 'number') {
      finalValue = finalValue < min ? min : finalValue;
    }
    if (max !== undefined && typeof max === 'number') {
      finalValue = finalValue > max ? max : finalValue;
    }
    this.changeValue(finalValue);
  }

  increment = () => this.addToValue(1);
  decrement = () => this.addToValue(-1);

  render() {
    const props = this.props;
    const value = this.getValue();
    return (
      <div className={classnames(props.className, 'number-input input')}>
        <button
          className="number-input__increment-button"
          onClick={this.decrement}
          type="button"
          disabled={props.disabled}
          aria-label="decrement"
        >
          -
        </button>
        <input
          {...this.props}
          value={value}
          className="number-input__input"
          onChange={this.onInputChange}
        />
        <button
          className="number-input__increment-button"
          onClick={this.increment}
          type="button"
          disabled={props.disabled}
          aria-label="increment"
        >
          +
        </button>
      </div>
    );
  }
}

export default NumberInput;

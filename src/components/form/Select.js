import * as React from 'react';

class Select extends React.PureComponent {
  render() {
    const { options, ...rest } = this.props;
    return (
      <label className="select-container">
        <select className="select input" {...rest} ref={this.selectRef}>
          {options.map((option, index) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <i className="ri-arrow-down-s-line select-icon" />
      </label>
    );
  }
}
export default Select;

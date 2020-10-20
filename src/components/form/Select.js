import * as React from 'react';

class Select extends React.PureComponent {
  render() {
    const { options, ...rest } = this.props;
    return (
      <select {...rest}>
        {options.map((option, index) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  }
}
export default Select;

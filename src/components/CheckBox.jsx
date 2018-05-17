import React, { Component } from 'react';

class CheckBox extends Component {
  state = {
    isChecked: this.props.isChecked
  };

  toggleCheckBox = () => {
    this.props.onHangleCheckBox(this.props.id);
    this.setState({ isChecked: !this.state.isChecked });
  };

  render() {
    const { isChecked } = this.state;
    const { label } = this.props;

    return (
      <label>
        <input
          type="checkbox"
          value={label}
          checked={isChecked}
          onChange={this.toggleCheckBox}
        />
        {label}
      </label>
    );
  }
}

export default CheckBox;

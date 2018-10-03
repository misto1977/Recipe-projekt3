import React, { Component } from 'react';
// components


class Serves extends Component {

  constructor(props) {
    super(props);

    this.state = { value: "" };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
    this.props.onServesChange(event.target.value);
  }

  render() {
    return (
      <div className="form-group col-md-12">
        <label>Serves</label>
        <input type="number" name="serves" value={this.state.value} onChange={this.handleChange} placeholder="For how many people is this recipe ideal?" className="form-control"/>
      </div>
    );
  }
}

export default Serves;

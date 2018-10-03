import React, { Component } from 'react';
// components

class Submit extends Component {
  constructor(props) {
    super(props);

    this.state = { active: this.props.active };
  }

  preventSubmit(e) {
    e.preventDefault();
    alert("Please fill all fields before submitting recipes.")
  }

  render() {

    let active = this.state.active;

    return (
      <div className="form-group col-md-12 add_top_20">
        <button id="submitRecipe" name="submit"
          onClick={active ? this.props.onSubmit : this.preventSubmit}
          className={active ? "btn_1 active" : "btn_1 disabled"}>
          {active ? "Submit recipe" : "Complete all fields to submit"}
        </button>
      </div>
    )
  }
}

export default Submit;

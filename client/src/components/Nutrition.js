import React, { Component } from 'react';
// components

class Nutrition extends Component {

  energy = this.props.energy;
  proteins = this.props.proteins;
  calories = this.props.calories
  fat = this.props.fat;

  render() {

    let people = this.props.people;

    return (
      <React.Fragment>
        <li>Energy: {(this.energy / this.props.serves) * people} kcal</li>
        <li>Proteins: {(this.proteins / this.props.serves) * people}g</li>
        <li>Calories: {(this.calories / this.props.serves) * people}</li>
        <li>Fat: {(this.fat / this.props.serves) * people}%</li>
      </React.Fragment>
    );
  }
}

export default Nutrition;

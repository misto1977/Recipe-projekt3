import React, { Component } from 'react';
// components
import Ingredient from "./Ingredient"

class Ingredients extends Component {

  ingredients = this.props.ingredients;

  render() {

    let people = this.props.people

    return (
      <React.Fragment>
      {this.ingredients.map( (ingredient, i) => {
        return (
          <Ingredient
            key={i}
            people={people}
            serves={this.props.serves}
            name={ingredient.name}
            units={ingredient.units}
            measuringUnit={ingredient.measuringUnit}
            unitEquivalentInGrams={ingredient.unitEquivalentInGrams}
          />
        )
      })}
      </React.Fragment>
    );
  }
}

export default Ingredients;

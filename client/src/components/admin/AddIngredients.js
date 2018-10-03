import React, { Component } from 'react';
import update from 'immutability-helper';
// components
import Autosuggest from "./addIngredients/Autosuggest";
import PickedIngs from "./addIngredients/PickedIngs";

class AddIngredients extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fetchedIngs: [],
      pickedIngs: []
    }
  }

  componentDidMount() {
    this.props.onRef(this)
  }
  componentWillUnmount() {
    this.props.onRef(undefined)
  }
  submitIngs() {
    this.props.onSubmitIngs(this.state.pickedIngs)
  }

  handleFetchRequest = (str) => {
    // fetch ingredients
    fetch(`ingredients/${str}`)
    .then( res => res.json() )
    .then( filteredIngs => this.setState({fetchedIngs: filteredIngs}) );
  }

  handleAddIngredient = (ing, name) => {
    // check if ing already picked - bool
    let inArray = this.state.pickedIngs.some(ing => {
      return ing.Namn === name;
    });
    // do not mutate state directly. could lead to serious bugs
    if(!inArray){
      this.setState(prevState => ({
        pickedIngs: [...prevState.pickedIngs, ing],
        fetchedIngs: []
      }))
    } else {
      this.setState({
        fetchedIngs: []
      })
    }
  }

  handlePickedIngAmount = (amount, ingKey) => {
    const changedPickedIngs = update(this.state.pickedIngs, {
      [ingKey]: {ViktGram: {$set: amount}}
    });
    this.setState({pickedIngs: changedPickedIngs});
  }

  handleRemoveIng = (ingKey) => {
    this.setState(prevState => ({
      pickedIngs: update(prevState.pickedIngs, {$splice: [[ingKey, 1]]})
    }))
  }

  render() {
    return (
      <div className="form-group col-md-12">

        <Autosuggest
          minChars={2}
          onFetchRequest={this.handleFetchRequest}
          fetchedIngs={this.state.fetchedIngs}
          onAddIngredient={this.handleAddIngredient}
        />

        <PickedIngs
          picked={this.state.pickedIngs}
          onChangePickedIngAmount={this.handlePickedIngAmount}
          onRemoveIng={this.handleRemoveIng}
        />

      </div>
    )
  }
}

export default AddIngredients;

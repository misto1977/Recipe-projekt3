import React, { Component } from 'react';
// components

class Picked extends Component {

  changeAmount = (e) => {
    let amount = e.target.value;
    let ingKey = e.target.getAttribute("ingkey");
    this.setState({ amount: amount });
    this.props.onChangeAmount(amount, ingKey);
  }

  removeIng = (e) => {
    let ingKey = e.target.getAttribute("ingkey");
    this.props.onRemoveIng(ingKey);
  }

  render() {

    let ing = this.props.picked;
    let amount = this.props.picked.ViktGram;

    return (
      <React.Fragment>
        {ing==='undefined' || ing.length===0 ? <li></li> :
        <li>
          <span className="ing">{ing.Namn}</span>
          <div className="ctrls">
            <span>amount: </span>
            <input onChange={this.changeAmount} value={amount} ingkey={this.props.ingKey} type="number" />
            <span className="measuringUnit">g</span>
            <i className="icon-cancel" onClick={this.removeIng} ingkey={this.props.ingKey}></i>
          </div>
        </li>}
      </React.Fragment>
    )
  }
}

export default Picked;

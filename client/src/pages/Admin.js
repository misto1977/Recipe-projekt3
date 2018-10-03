import React, { Component } from 'react';
// components
import Title from "../components/admin/Title";
import Serves from "../components/admin/Serves";
import AddIngredients from "../components/admin/AddIngredients";
import AddInstructions from "../components/admin/AddInstructions";
import AddImage from "../components/admin/AddImage";
import Submit from "../components/admin/Submit";

class Admin extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: "",
      serves: 1,
      ingredients: [],
      instructions: [],
      img: {
        path: "https://place-hold.it/300x300",
        uploaded: false
      }
    }
  }

  handleTitleChange = (title) => {
    console.log("Title: " + title);
  }

  handleServesChange = (serves) => {
    console.log("Serves: " + serves);
  }

  handleSubmitIngs = (ingredients) => {
    console.log(ingredients);
  }

  handleSubmitInstructions = (instructions) => {
    console.log(instructions);
  }

  handleImageAdded = (image) => {
    console.log("Image: " + image);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.AddIngredients.submitIngs();
    this.AddInstructions.submitInstructions();
  }

  render() {

    let img = this.state.img.uploaded ? "/images/recipes/" + this.state.img.path : this.state.img.path;

    return (
      <div className="col-md-12">
        <div style={{marginTop:100}} className="add-review col-md-6 m-0auto">
					<h5>Add a recipe</h5>
					<form method="post" encType="multipart/form-data">
						<div className="row">

              <Title onTitleChange={this.handleTitleChange} />

							<Serves onServesChange={this.handleServesChange} />

              <AddIngredients onSubmitIngs={this.handleSubmitIngs} onRef={ref => (this.AddIngredients = ref)} />

              <AddInstructions onSubmitInstructions={this.handleSubmitInstructions} onRef={ref => (this.AddInstructions = ref)} />

              <AddImage imgName={img} onImageAdded={this.handleImageAdded} />

							<Submit active={true} onSubmit={this.handleSubmit} />

						</div>
					</form>
  			</div>
      </div>
    );
  }
}

export default Admin;

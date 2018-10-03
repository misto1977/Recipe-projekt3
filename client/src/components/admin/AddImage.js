import React, { Component } from 'react';
// components

class AddImage extends Component {
  constructor(props) {
    super(props);


  }

  render() {

    return (
      <div id="uploadImg" className="form-group col-md-5">
        <label>Upload recipe image</label>
        <div id="imgPlaceholder">
          <img src={this.props.imgName} alt="placeholder" />
        </div>
        <input id="inputImg" className="smallBtn" name="inputImg" type="file" />
      </div>
    )
  }
}

export default AddImage;

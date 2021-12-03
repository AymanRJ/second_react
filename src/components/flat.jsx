import React, { Component } from "react";


class Flat extends Component {

  renderFlat = () => {
    // const url = this.props.flat.url
    // const price = this.props.flat.price
    // const name = this.props.flat.name

    return (
      <div className="card" style={{ backgroundColor: "black" }}>
        <div className="card-category">le prix</div>
        <div className="card-description">
          <h2>le nom</h2>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderFlat()}
      </div>
    );
}
}


export default Flat;

import React, { Component } from "react";

import Flat from "./flat";

class FlatList extends Component {
  renderList = () => {
    return this.props.flats.map(flat => <Flat url={flat.imageUrl} name={flat.name} price={flat.price} />);
  }


  render() {
    return (
      <div>
        {this.renderList()}
      </div>
    );
  }
}


export default FlatList;

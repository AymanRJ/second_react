import React, { Component } from 'react';

import Flat from './flat';
import FlatList from './flat_list';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flats: [],
      selectedFlatId: null
    };
  }

  render() {
    return (
      <div className="flat-list ">
        <FlatList flats={this.state.flats} />
      </div>
      <div className="map-container">

      </div>
    );
  }
}

export default App;

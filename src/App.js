import React from 'react';
import Menu from './menu/Menu';
import Noise from './Noise/Noise';
import Info from './Info/Info';
import floor_count from './graphics/floor_count.png';
import height from './graphics/height.png';
import price from './graphics/price.png';
import time from './graphics/time.png';

import './App.css';

class App extends React.Component {
  state = {
    view: null,
  }

  setView = (view) => {
    this.setState({view});
  }

  render() {
    return (
      <div className="App">
        <Menu onClick={this.setView} />
        <Noise />
        <div className="info">
          {this.state.view === 'floor_count' && <Info graphics={floor_count} />}
          {this.state.view === 'height' && <Info graphics={height} />}
          {this.state.view === 'price' && <Info graphics={price} />}
          {this.state.view === 'time' && <Info graphics={time} />}
        </div>
      </div>
    );
  }
}

export default App;

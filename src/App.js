import React from 'react';
import Menu from './menu/Menu';
import Info from './Info/Info';
import graphics1 from './graphics/graphics1.png';
import graphics2 from './graphics/graphics2.png';
import graphics3 from './graphics/graphics3.png';

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
        <div className="info">
          {this.state.view === 'info1' && <Info graphics={graphics1} />}
          {this.state.view === 'info2' && <Info graphics={graphics2} />}
          {this.state.view === 'info3' && <Info graphics={graphics3} />}
        </div>
      </div>
    );
  }
}

export default App;

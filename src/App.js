import React from 'react';
import Menu from './menu/Menu';
import TimeInfo from './timeInfo/TimeInfo';
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
          {this.state.view === 'time' && <TimeInfo />}
        </div>
      </div>
    );
  }
}

export default App;

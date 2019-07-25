import React from 'react';

import Noise from './Noise/Noise';
import Info from './Info/Info';
import DescriptionScreen from './DescriptionScreen/DescriptionScreen';

import './App.css';

const AWAKE_TIMEOUT = 120 * 1000;

class App extends React.Component {
  sleepTimerId = null;

  state = {
    screen: 'analytics',
  }

  openFullScreen() {
    const elem = document.documentElement;

    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
      elem.msRequestFullscreen();
    }
  }

  closeFullScreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { /* Firefox */
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE/Edge */
      document.msExitFullscreen();
    }
  }

  addFullscreenHandler() {
    window.addEventListener('keydown', event => {
      if (event.key.toLowerCase() !== 'f') {
        return;
      }

      if (!window.screenTop && !window.screenY) {
        this.closeFullScreen();
      } else {
        this.openFullScreen();
      }
    });
  }

  addSleepTimer = () => {
    this.sleepTimerId = setTimeout(() => this.setState({sleep: true}), AWAKE_TIMEOUT);
  }

  addAnyReactionHandler = () => {
    const f = () => {
      if (this.sleepTimerId) {
        clearTimeout(this.sleepTimerId);
      }

      this.setState({sleep: false});

      this.addSleepTimer();
    }

    window.addEventListener('mousemove', f);
    window.addEventListener('keydown', f);
  }

  componentDidMount() {
    this.addFullscreenHandler();
    this.addAnyReactionHandler();
  }

  render() {
    if (this.state.screen === 'sleep') {
      return <Noise />;
    }

    return (
      <div className="App">
        <div className="info">
          {this.state.screen === 'analytics' && <Info />}
          {this.state.screen === 'description' && <DescriptionScreen />}
        </div>
      </div>
    );
  }
}

export default App;

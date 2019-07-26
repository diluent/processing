import React from 'react';
import burj from './source/burj.png';
import shanghai from './source/shanghai.png';
import abraj from './source/abraj.png';
import ping from './source/ping.png';
import lotte from './source/lotte.png';
import one from './source/one.png';
import './styles.css';

import DescriptionScreenWithPosters from './DescriptionScreenWithPosters';

class DescriptionScreen extends React.Component {
  state = {
    view: null,
  }

  onClick = (view) => {
    this.setState({view})
  }

  render() {
    if (this.state.view !== null) {
      return (
        <DescriptionScreenWithPosters view={this.state.view} onClick={this.onClick} />
      );
    }

    return (
      <div className="building-container-row">
        <div className='building-horizontal' style={{width: '20%'}} onClick={() => this.onClick('burj')} >
          <img src={burj} />
        </div>
        <div className='building-horizontal' style={{width: '15%'}} onClick={() => this.onClick('shanghai')}>
          <img src={shanghai} />
        </div>
        <div className='building-horizontal' style={{width: '45%'}} onClick={() => this.onClick('abaj')}>
          <img src={abraj} />
        </div>
        <div className='building-horizontal' style={{width: '7%'}} onClick={() => this.onClick('ping')}>
          <img src={ping} />
        </div>
        <div className='building-horizontal' style={{width: '11%'}} onClick={() => this.onClick('lotte')}>
          <img src={lotte} />
        </div>
        <div className='building-horizontal' style={{width: '7.6%'}} onClick={() => this.onClick('one')}>
          <img src={one} />
        </div>
      </div>
    );
  }
}

export default DescriptionScreen;

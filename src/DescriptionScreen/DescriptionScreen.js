import React from 'react';
import img1 from './source/1.png';
import img2 from './source/2.png';
import img3 from './source/3.png';
import img4 from './source/4.png';
import img5 from './source/5.png';
import img6 from './source/6.png';
import './styles.css';

import DescriptionScreenWithPosters from './DescriptionScreenWithPosters';

class DescriptionScreen extends React.Component {
  state = {
    view: '1',
  }

  onClick = (name) => {

  }

  render() {
    if (this.state.view === null) {
      return (
        <DescriptionScreenWithPosters />
      );
    }

    return (
      <div className="building-container-row">
        <div className='building-horizontal' style={{width: '20%'}}>
          <img src={img2} onClick={() => this.onClick('')} />
        </div>
        <div className='building-horizontal' style={{width: '15%'}}>
          <img src={img3} />
        </div>
        <div className='building-horizontal' style={{width: '45%'}}>
          <img src={img5} />
        </div>
        <div className='building-horizontal' style={{width: '7%'}}>
          <img src={img6} />
        </div>
        <div className='building-horizontal' style={{width: '11%'}}>
          <img src={img4} />
        </div>
        <div className='building-horizontal' style={{width: '7.6%'}}>
          <img src={img1} />
        </div>
      </div>
    );
  }
}

export default DescriptionScreen;

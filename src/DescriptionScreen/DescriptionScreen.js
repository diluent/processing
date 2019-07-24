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
    view: null,
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
          <img src={img1} className='building' onClick={() => this.onClick('')} />
          <img src={img2} className='building' />
          <img src={img3} className='building' />
          <img src={img4} className='building' />
          <img src={img5} className='building' />
          <img src={img6} className='building' />
      </div>
    );
  }
}

export default DescriptionScreen;

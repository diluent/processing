import React from 'react';
import img1 from './source/1.png';
import img2 from './source/2.png';
import img3 from './source/3.png';
import img4 from './source/4.png';
import img5 from './source/5.png';
import img6 from './source/6.png';
import posterBuilding1 from './source/posters/Abraj Al-Bai building.jpg';
import posterCity1 from './source/posters/Abraj Al-Bai city.jpg';

import './styles.css';

class DescriptionScreenWithPosters extends React.Component {
  state = {
    view: null,
  }

  onClick = (name) => {
  }

  render() {
    return (
      <div className="description-screen-with-posters">
        {/* <div className="description-screen-with-posters__poster"> */}
        <img src={posterBuilding1} className="description-screen-with-posters__poster" />
        {/* </div> */}
        <div className="description-screen-with-posters__buildings">
          <div className='building-vertical'>
            <img src={img1} onClick={() => this.onClick('')} />
          </div>
          <div className='building-vertical'>
            <img src={img2} />
          </div>
          <div className='building-vertical'>
            <img src={img3} />
          </div>
          <div className='building-vertical'>
            <img src={img4} />
          </div>
          <div className='building-vertical'>
            <img src={img5} />
          </div>
          <div className='building-vertical'>
            <img src={img6} />
          </div>
        </div>
        {/* <div className="description-screen-with-posters__poster"> */}
        <img src={posterCity1} className="description-screen-with-posters__poster" />
        {/* </div> */}
      </div>
      
    );
  }
}

export default DescriptionScreenWithPosters;

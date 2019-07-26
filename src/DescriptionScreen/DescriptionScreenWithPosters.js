import React from 'react';
import burj from './source/burj.png';
import shanghai from './source/shanghai.png';
import abraj from './source/abraj.png';
import ping from './source/ping.png';
import lotte from './source/lotte.png';
import one from './source/one.png';
import abrajBuilding from './source/posters/Abraj Al-Bai building.jpg';
import abrajCity from './source/posters/Abraj Al-Bai city.jpg';

import burjBuilding from './source/posters/Burj Khalifa building.jpg';
import burjCity from './source/posters/Burj Khalifa city.jpg';

import lotteBuilding from './source/posters/Lotte World Tower building.jpg';
// import lotteCity from './source/posters/Lotte World Tower city.jpg';

import oneBuilding from './source/posters/One World Trade Center building.jpg';
import oneCity from './source/posters/One World Trade Center city.jpg';

import pingBuilding from './source/posters/Ping An Finance Centre building.jpg';
import pingCity from './source/posters/Ping An Finance Centre city.jpg';

import shanghaiBuilding from './source/posters/Shanghai building.jpg';
import shanghaiCity from './source/posters/Shanghai city.jpg';

import './styles.css';

class DescriptionScreenWithPosters extends React.Component {
  getBuildingImg = () => {
    switch(this.props.view) {
      case 'burj': return burjBuilding;
      case 'shanghai': return shanghaiBuilding;
      case 'abraj': return abrajBuilding;
      case 'ping': return pingBuilding;
      case 'lotte': return lotteBuilding;
      case 'one': return oneBuilding;
    }
  }

  getCityImg = () => {
    switch(this.props.view) {
      case 'burj': return burjCity;
      case 'shanghai': return shanghaiCity;
      case 'abraj': return abrajCity;
      case 'ping': return pingCity;
      case 'lotte': return lotteBuilding; // TODO: Add image
      case 'one': return oneCity;
    }
  }

  render() {
    return (
      <div className="description-screen-with-posters">
        <img src={this.getBuildingImg()} className="description-screen-with-posters__poster" />
        <div className="description-screen-with-posters__buildings">
          <div className='building-vertical' onClick={() => this.props.onClick('burj')}>
            <img src={burj} />
          </div>
          <div className='building-vertical' onClick={() => this.props.onClick('shanghai')}>
            <img src={shanghai} />
          </div>
          <div className='building-vertical' onClick={() => this.props.onClick('abraj')}>
            <img src={abraj} />
          </div>
          <div className='building-vertical' onClick={() => this.props.onClick('ping')}>
            <img src={ping} />
          </div>
          <div className='building-vertical' onClick={() => this.props.onClick('lotte')}>
            <img src={lotte} />
          </div>
          <div className='building-vertical' onClick={() => this.props.onClick('one')}>
            <img src={one} />
          </div>
        </div>
        <img src={this.getCityImg()} className="description-screen-with-posters__poster" />
      </div>
      
    );
  }
}

export default DescriptionScreenWithPosters;

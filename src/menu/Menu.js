import React from 'react';
import price from './source/price.png';
import floor_area from './source/floor_area.png';
import floor_count from './source/floor_count.png';
import height from './source/height.png';
import hotel_price from './source/hotel_price.png';
import time from './source/time.png';
import './styles.css';

const Menu = ({onClick, view}) => {
  return (
    <div className="menu">
      <div className="menuColumn">
        <div className={`menuItem`}>
          <img src={price} className={`menuImg ${view === 'cost' ? 'menuActive' : ''}`} onClick={() => onClick('cost')}/>
          <div className="title">COSTS</div>
        </div>
        <div className="menuItem">
          <img src={floor_area} className={`menuImg ${view === 'floor_area' ? 'menuActive' : ''}`} onClick={() => onClick('floor_area')}/>
          <div className="title">FLOOR AREA</div>
        </div>
        <div className="menuItem">
          <img src={floor_count} className={`menuImg ${view === 'floor_count' ? 'menuActive' : ''}`} onClick={() => onClick('floor_count')}/>
          <div className="title">FLOOR COUNT</div>
        </div>
      </div>
      <div className="menuColumn">
        <div className="menuItem">
          <img src={height} className={`menuImg ${view === 'height' ? 'menuActive' : ''}`} onClick={() => onClick('height')}/>
          <div className="title">HEIGHT</div>
        </div>
        <div className="menuItem">
          <img src={hotel_price} className={`menuImg ${view === 'hotel_price' ? 'menuActive' : ''}`} onClick={() => onClick('hotel_price')}/>
          <div className="title">HOTEL PRICE</div>
        </div>
        <div className="menuItem">
          <img src={time} className={`menuImg ${view === 'time' ? 'menuActive' : ''}`} onClick={() => onClick('time')}/>
          <div className="title">TIME</div>
        </div>
      </div>
    </div>
  );
}

export default Menu;

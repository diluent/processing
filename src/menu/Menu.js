import React from 'react';
import price from './source/price.png';
import floor_area from './source/floor_area.png';
import floor_count from './source/floor_count.png';
import height from './source/height.png';
import hotel_price from './source/hotel_price.png';
import time from './source/time.png';
import './styles.css';

const Menu = ({onClick}) => {
  return (
    <div className="menu">
        <img src={price} className="menuImg" onClick={() => onClick('cost')}/>
        <img src={floor_area} className="menuImg" onClick={() => onClick('floor_area')}/>
        <img src={floor_count} className="menuImg" onClick={() => onClick('floor_count')}/>
        <img src={height} className="menuImg" onClick={() => onClick('height')}/>
        <img src={hotel_price} className="menuImg" onClick={() => onClick('hotel_price')}/>
        <img src={time} className="menuImg" onClick={() => onClick('time')}/>
    </div>
  );
}

export default Menu;

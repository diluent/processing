import React from 'react';
import clock from '../source/clock.png';
import dollar from '../source/dollar.png';
import house from '../source/house.png';
import './styles.css';

const Menu = ({onClick}) => {
  return (
    <div className="menu">
        <img src={clock} className="menuImg" onClick={() => onClick('time')}/>
        <img src={dollar} className="menuImg" />
        <img src={house} className="menuImg" />
    </div>
  );
}

export default Menu;

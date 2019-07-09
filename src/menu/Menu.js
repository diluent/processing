import React from 'react';
import clock from '../source/clock.png';
import dollar from '../source/dollar.png';
import house from '../source/house.png';
import './styles.css';

const Menu = ({onClick}) => {
  return (
    <div className="menu">
        <img src={clock} className="menuImg" onClick={() => onClick('info1')}/>
        <img src={dollar} className="menuImg" onClick={() => onClick('info2')}/>
        <img src={house} className="menuImg" onClick={() => onClick('info3')}/>
    </div>
  );
}

export default Menu;

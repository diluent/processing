import React from 'react';
import time2 from './svg/time2.png';
import time3 from './svg/time3.png';
import time4 from './svg/time4.png';
import time5 from './svg/time5.png';
import './styles.css';

function TimeInfo({graphics}) {
  return (
    <div className="image-container">
      <img src={graphics} className="part" />
      {/* <img src={time2} className="part part2" />
      <img src={time3} className="part part3" />
      <img src={time4} className="part part4" />
      <img src={time5} className="part part5" /> */}
    </div>
  );
}

export default TimeInfo;

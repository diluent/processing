import React from 'react';
import time2 from './svg/time2.png';
import time3 from './svg/time3.png';
import time4 from './svg/time4.png';
import time5 from './svg/time5.png';
import './styles.css';

function TimeInfo({cityIcons, graphics}) {
  return (
    <div className="image-container">
      {cityIcons && (
        <>
          <img src={cityIcons[0]} className="cityIcon cityIcon1" />
          <img src={cityIcons[1]} className="cityIcon cityIcon2" />
          <img src={cityIcons[2]} className="cityIcon cityIcon3" />
          <img src={cityIcons[3]} className="cityIcon cityIcon4" />
          <img src={cityIcons[4]} className="cityIcon cityIcon5" />
          <img src={cityIcons[5]} className="cityIcon cityIcon6" />
        </>
      )}

      {!cityIcons && <img src={graphics} className="part" />}
    </div>
  );
}

export default TimeInfo;

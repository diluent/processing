import React from 'react';
import time2 from './svg/time2.png';
import time3 from './svg/time3.png';
import time4 from './svg/time4.png';
import time5 from './svg/time5.png';
import './styles.css';

class TimeInfo extends React.Component {
  state = {
    showMainPicture: true,
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({showMainPicture: false});
    }, 2000);
  }

  render() {
    const {cityIcons, graphics} = this.props;

    return (
      <div className="image-container">
        {this.state.showMainPicture && (
          <img src={graphics} className="part" />
        )}

        {!this.state.showMainPicture && (
          <>
            <img src={cityIcons[0]} className="cityIcon cityIcon1" />
            <img src={cityIcons[1]} className="cityIcon cityIcon2" />
            <img src={cityIcons[2]} className="cityIcon cityIcon3" />
            <img src={cityIcons[3]} className="cityIcon cityIcon4" />
            <img src={cityIcons[4]} className="cityIcon cityIcon5" />
            <img src={cityIcons[5]} className="cityIcon cityIcon6" />
          </>
        )}
      </div>
    );
  }
}

export default TimeInfo;

import React from 'react';
import './styles.css';

class Info extends React.Component {
  state = {
    showMainPicture: true,
  }

  timerId = null;

  componentDidMount() {
    this.timerId = setTimeout(() => {
      this.setState({showMainPicture: false});
    }, 2000);
  }

  componentWillUnmount() {
    this.timerId = null;
  }

  render() {
    const {cityIcons, graphics, big} = this.props;

    const imgCntClass = !this.state.showMainPicture ? 'visible' : 'invisible';
    const imgCntSizeClass = big ? 'big' : 'small';

    return (
      <div className="image-container">
        <img src={graphics} className={`part ${this.state.showMainPicture ? 'visible' : 'invisible'}`} />

        <div className={[imgCntClass, imgCntSizeClass].join(' ')}>
          <img src={cityIcons[0]} className="cityIcon cityIcon1" />
          <img src={cityIcons[1]} className="cityIcon cityIcon2" />
          <img src={cityIcons[2]} className="cityIcon cityIcon3" />
          <img src={cityIcons[3]} className="cityIcon cityIcon4" />
          <img src={cityIcons[4]} className="cityIcon cityIcon5" />
          <img src={cityIcons[5]} className="cityIcon cityIcon6" />
        </div>
      </div>
    );
  }
}

export default Info;

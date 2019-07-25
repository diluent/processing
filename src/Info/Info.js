import React from 'react';
import Menu from '../menu/Menu';
import InfoItem from './InfoItem';

import './styles.css';


const mainGraphs = {
  floor_count: require('../graphics/floor count@0,5x.png'),
  floor_area: require('../graphics/floor area@0,5x.png'),
  height: require('../graphics/height@0,5x.png'),
  hotel_price: require('../graphics/price@0,5x.png'),
  time: require('../graphics/time@0,5x.png'),
  cost: require('../graphics/costs@0,5x.png'),
};

const countIcons = [
  require('../raw_graphics/floor count Abraj Bai@0,25x.png'),
  require('../raw_graphics/floor count Burj Khalifa@0,25x.png'),
  require('../raw_graphics/floor count Lotte@0,25x.png'),
  require('../raw_graphics/floor count one world trade@0,25x.png'),
  require('../raw_graphics/floor count ping an@0,25x.png'),
  require('../raw_graphics/floor count Shanghai@0,25x.png'),
];

const areaIcons = [
  require('../raw_graphics/floor area apraj al-bai@0,25x.png'),
  require('../raw_graphics/floor area burj khalifa@0,25x.png'),
  require('../raw_graphics/floor area lotte world@0,25x.png'),
  require('../raw_graphics/floor area one world@0,25x.png'),
  require('../raw_graphics/floor area ping an@0,25x.png'),
  require('../raw_graphics/floor area shanghai@0,25x.png'),
];

const heightIcons = [
  require('../raw_graphics/height Abraj Bai@0,25x.png'),
  require('../raw_graphics/height Burj Khalifa@0,25x.png'),
  require('../raw_graphics/height Lotte@0,25x.png'),
  require('../raw_graphics/height One World Trade@0,25x.png'),
  require('../raw_graphics/height Ping An@0,25x.png'),
  require('../raw_graphics/height Shanghai@0,25x.png'),
];

const priceIcons = [
  require('../raw_graphics/hotel price Abraj-Bai@0,25x.png'),
  require('../raw_graphics/hotel price Burj Khalifa@0,25x.png'),
  require('../raw_graphics/hotel price Lotte@0,25x.png'),
  require('../raw_graphics/hotel price One World Trade@0,25x.png'),
  require('../raw_graphics/hotel price Ping An@0,25x.png'),
  require('../raw_graphics/hotel price Shanghai@0,25x.png'),
];

const timeIcons = [
  require('../raw_graphics/time abraj al-bai@0,25x.png'),
  require('../raw_graphics/time burj@0,25x.png'),
  require('../raw_graphics/time lotte tower@0,25x.png'),
  require('../raw_graphics/time one world trade@0,25x.png'),
  require('../raw_graphics/time ping an@0,25x.png'),
  require('../raw_graphics/time shanghai@0,25x.png'),
];

const costIcons = [
  require('../raw_graphics/costs abraj al-bai@0,25x.png'),
  require('../raw_graphics/costs burj khalifa@0,25x.png'),
  require('../raw_graphics/costs lotte world@0,25x.png'),
  require('../raw_graphics/costs one world trade@0,25x.png'),
  require('../raw_graphics/costs ping an@0,25x.png'),
  require('../raw_graphics/costs shanghai@0,25x.png'),
];

class Info extends React.Component {
  state = {
    view: null,
  }

  componentDidMount() {
    this.preloadImages();
  }

  componentWillUnmount() {
    this.timerId = null;
  }

  setView = (view) => {
    this.setState({view});
  }

  preloadImages = () => {
    let srcs = Object.values(mainGraphs);
    srcs = srcs.concat(countIcons);
    srcs = srcs.concat(areaIcons);
    srcs = srcs.concat(heightIcons);
    srcs = srcs.concat(priceIcons);
    srcs = srcs.concat(timeIcons);
    srcs = srcs.concat(costIcons);

    const images = new Array();

    for (let i = 0; i < srcs.length; i++) {
      images[i] = new Image();
      images[i].src = srcs[i];
    }
  }

  render() {
    return (
      <>
        <Menu onClick={this.setView} view={this.state.view} />
        {this.state.view === 'floor_count' && <InfoItem cityIcons={countIcons} graphics={mainGraphs.floor_count} />}
        {this.state.view === 'floor_area' && <InfoItem cityIcons={areaIcons} graphics={mainGraphs.floor_area} big={true} />}
        {this.state.view === 'height' && <InfoItem cityIcons={heightIcons} graphics={mainGraphs.height} />}
        {this.state.view === 'hotel_price' && <InfoItem cityIcons={priceIcons} graphics={mainGraphs.hotel_price} />}
        {this.state.view === 'time' && <InfoItem cityIcons={timeIcons} graphics={mainGraphs.time} big={true} />}
        {this.state.view === 'cost' && <InfoItem cityIcons={costIcons} graphics={mainGraphs.cost} big={true} />}
      </>
    );
  }
}

export default Info

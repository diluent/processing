import OpenSimplexNoise from 'open-simplex-noise';
import React from 'react';
import './styles.css';


class Noise extends React.Component {
  intervalId = null;
  canvas = null;

  state = {
    view: null,
  }

  componentDidMount() {
    this.renderCanvas(this.canvas);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  renderCanvas(canvas) {
    let frame = 1;
    this.intervalId = setInterval(() => this.renderNoise(canvas, frame++), 200);
  }

  renderNoise(canvas, frameCount) {
    if(!canvas) {
      return;
    }

    const openSimplex = new OpenSimplexNoise(Date.now());

    const TWO_PI = Math.PI*2;
    const width = window.innerWidth;
    const height = window.innerHeight;

    const spacing = 15;
    const numFrames = 100;
    const R = 0.5;
    const scale = 0.01;

    const t = (1.0*frameCount/numFrames)%1;

    // const imageData = ctx.createImageData(width, height);
    canvas.height = height;
    canvas.width = width;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    for(let x = 0;x<width;x+=spacing){
      for(let y = 0;y<height;y+=spacing){
        let ns = openSimplex.noise2D(scale*x,scale*y,R*Math.cos(TWO_PI*t),R*Math.sin(TWO_PI*t));

        const [fromX, fromY, toX, toY] = ns<0
          ? [x, y, x+spacing, y+spacing]
          : [x, y+spacing, x+spacing, y];

        ctx.beginPath();
        ctx.moveTo(fromX, fromY);
        ctx.lineTo(toX, toY);
        ctx.strokeStyle = '#fff';
        ctx.stroke();
      }
    }

    // ctx.putImageData(imageData, 0, 0);

    // if(frameCount<=numFrames){
    //   saveFrame("fr###.png");
    // }
    // if(frameCount==numFrames){
    //   println("finished");
    //   //stop();
    // }
}


  render() {
    return (
      <canvas className='canvas' ref={ref => this.canvas = ref} height={window.innerHeight} width={window.innerWidth} />
    );
  }
}

export default Noise;

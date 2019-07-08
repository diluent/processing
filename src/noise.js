import OpenSimplexNoise from 'open-simplex-noise';

const [width, height] = [888, 222];
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const imageData = ctx.createImageData(width, height);
const openSimplex = new OpenSimplexNoise(Date.now());

for (let x = 0; x < width; x++) {
  for (let y = 0; y < height; y++) {
    const i = (x + y * width) * 4;
    const value = (openSimplex.noise2D(x, y) + 1) * 128;
    imageData.data[i] = value;
    imageData.data[i + 1] = value;
    imageData.data[i + 2] = value;
    imageData.data[i + 3] = 255;
  }
}
ctx.putImageData(imageData, 0, 0);
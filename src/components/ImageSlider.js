import React from 'react';
import Carousel from 'nuka-carousel';
import himage from '../images/home/himage.jpg';
import training from '../images/home/training.jpg';
import clinic from '../images/home/clinic.jpg';
import team from '../images/home/team.jpg';
import charity from '../images/home/charity.jpg';

class ImageSlider extends React.Component {
  render() {
    const images = [
      {original: himage, key:1},
      {original: training, key:2},
      {original: clinic, key:3},
      {original: team, key:4},
      {original: charity, key:5},
    ];
    return (
      <div>
        <Carousel>
          {images.map(image => (
            <img src={image.original} key={image.key}/>
          ))}
        </Carousel>
      </div>
    );
  }
}

export default ImageSlider;

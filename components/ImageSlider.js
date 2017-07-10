import React from 'react';
import Carousel from 'nuka-carousel';

class ImageSlider extends React.Component {
  render() {
    const {images} = this.props;
    console.log(images);
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

ImageSlider.propTypes = {
  images: React.PropTypes.array,
}

export default ImageSlider;

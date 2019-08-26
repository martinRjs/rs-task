import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import AwsSliderStyles from 'react-awesome-slider/src/styles';

const PropertyImageSlider = ({ photos }) => (
  photos.length ?
    <AwesomeSlider cssModule={AwsSliderStyles} className="property-image">
      {photos.map(photo => <div data-src={photo.urlMedium} key={photo.id} />)}
    </AwesomeSlider>
    : <img src="https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" alt="" />
);

export default PropertyImageSlider;
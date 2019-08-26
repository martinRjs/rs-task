import React, { useState, useEffect } from 'react';
import Properties from '../Data/properties';
import { formatPrice } from '../Utils/';
import PropertyImageSlider from './PropertyImageSlider';

const PropertyDetails = ({ match }) => {

  const [property, setProperty] = useState({});

  useEffect(() => {
    const propertyIndex = Properties.properties.findIndex(item => {
      return item.id.toString() === match.params.propertyId
    });

    setProperty(Properties.properties[propertyIndex]);
    console.log(Properties.properties[propertyIndex]);
  }, [match.params.propertyId])


  const { address1, city, state, zip } = property.address || {};

  return (
    <div className="details-container">
      <div className="details-address">
        <p>{address1}</p>
        <span>{`${city}, ${state} ${zip}`}</span>
      </div>
      <div className="details">
        {property.resources ? <PropertyImageSlider {...property.resources} /> : ''}
        <div className="property-info">
          <div className="property-price">
            <span className="price-title">Initial Investment</span>
            <p className="number-big">{formatPrice(property.financial && property.financial.listPrice)}</p>
            <span className="price-footer">Open House Price:  $105,000</span>
          </div>
          <div>
            more info here!!
          </div>
        </div>
      </div>
    </div >
  );
}

export default PropertyDetails;
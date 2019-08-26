import React from 'react';
import PropertyCard from './PropertyCard';

const GridContainer = ({ properties }) => {
  return (
    <>
      {properties && properties.map(property => <PropertyCard {...property} key={property.id} />)}
    </>
  )
}

export default GridContainer;
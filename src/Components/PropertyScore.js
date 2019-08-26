import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons/faStar';


const rating = [
  <FontAwesomeIcon icon={faStar} />,
  <FontAwesomeIcon icon={faStar} />,
  <FontAwesomeIcon icon={faStar} />,
  <FontAwesomeIcon icon={faStar} />,
  <FontAwesomeIcon icon={faStarEmpty} />
]

const PropertyScore = ({ score }) => (
  <div>
    <h5>Neighborhood</h5>
    {rating.map((s, i) => i < score ? <FontAwesomeIcon icon={faStar} key={i}/> : <FontAwesomeIcon icon={faStarEmpty} key={i}/>)}
  </div>
);

export default PropertyScore;
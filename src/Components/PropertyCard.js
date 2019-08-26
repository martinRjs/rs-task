import React from 'react';
import PropertyInfo from './PropertyInfo';
import PropertyScore from './PropertyScore';
import { Link } from 'react-router-dom';
import { formatPrice, getGrossYield, getAddress, getPropertyPhysicalInfo } from '../Utils'
import '../Styles/components/_property-card.scss';
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PropertyCard = ({ mainImageUrl, address, physical, financial, score, id }) => {
  const { monthlyRent, listPrice } = financial || {};
  const { neighborhoodScore } = score || {};

  return mainImageUrl ? (
    <div className="property-card">
      <div className="property-info">
        <Link to={`/details/${id}`}>
          <img src={mainImageUrl} alt="" />
        </Link>
        <div className="overlay">
          <span className="property-price">{`${formatPrice(listPrice)}`}</span>
          <p>
            {getPropertyPhysicalInfo(physical || {})}
          </p>
        </div>
      </div>
      <div className="property-stats">
        <PropertyInfo header="Current Rent" content={`${formatPrice(monthlyRent)}`} />
        <PropertyInfo header="Cap Rate" />
        <PropertyInfo header="Gross Yield" content={formatPrice(getGrossYield(monthlyRent, listPrice))} />
        <PropertyScore score={neighborhoodScore} />
      </div>
      <div className="property-address">
        <div className="property-addres-value">
          {getAddress(address)}
        </div>
        <div className="property-status">
          <span><FontAwesomeIcon icon={faHome} /> Open House!</span>
        </div>
      </div>
    </div>
  ) : ""
}

export default PropertyCard;
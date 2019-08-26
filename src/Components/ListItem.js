import React from 'react';
import { formatPrice } from '../Utils'
import { Link } from 'react-router-dom';

const ListItem = ({ id, address, mainImageUrl, financial, physical }) => {
  const { address1, city, state, zip } = address;
  const { monthlyRent, listPrice } = financial || {};

  return mainImageUrl ?
    (<tr key={id}>
      <td>
        <img src={mainImageUrl} alt="" />
      </td>
      <td className="address">
        <p>{address1}</p>
        <span>{`${city}, ${state} ${zip}`}</span>
      </td>
      <td>{formatPrice(listPrice)}</td>
      <td>{formatPrice(monthlyRent)}</td>
      <td>10%</td>
      <td>{physical.yearBuilt}</td>
      <td>
        <Link to={`/details/${id}`} className="details-button">
          See Details
        </Link>
      </td>
    </tr>) : null;
}

export default ListItem;
import React, { useState, useEffect } from 'react';
import Properties from '../Data/properties';
import GridContainer from './GridContainer';
import ListContainer from './ListContainer';
import usePropertiesReducer from '../Hooks/usePropertiesReducer';

const Main = () => {
  const [properties] = useState(Properties.properties);
  const [gridView, setGridView] = useState(true);

  useEffect(() => {
    console.log('fetching data ..');
    // fetch('https://dev1-sample.azurewebsites.net/properties.json').then(a => a.json()).then(b => console.log(b))
  });


  const [initialState, dispatch] = usePropertiesReducer({});

  const handleViewChange = () => {
    setGridView(!gridView);
    console.log({ initialState, dispatch });
  }

  return (
    <>
      <ul className="view-options">
        <li>
          <button className={gridView ? '' : 'active'} onClick={handleViewChange}>List View</button>
        </li>
        <li>
          <button className={gridView ? 'active' : ''} onClick={handleViewChange}>Grid View</button>
        </li>
      </ul>
      <div className="main-container">
        {gridView ? <GridContainer properties={properties} /> :
          <ListContainer properties={properties} />}
      </div>
    </>
  );
}


export default Main;
import { useReducer } from 'react';


const usePropertiesReducer = (initialState) => {

  const propertiesReducer = (state = initialState, action) => {
    console.log('i\'m a properties reducer!');
  };
  
  return useReducer(propertiesReducer, initialState);
}


export default usePropertiesReducer;
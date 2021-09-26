import React from 'react'
import LaptopeListItem from './laptopListItem/LaptopeListItem';


const LaptopList = ({laptops}) => {
  return (
    <ul>
      {laptops.map((laptop) => {
        return <LaptopeListItem laptop={laptop} key={laptop.id} />;
      })}
    </ul>
  );
}

export default LaptopList;
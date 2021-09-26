import React from 'react'


const LaptopeListItem = ({ laptop }) => {
  return (
    <li>
      <h2>{laptop.name}</h2>
      <img src={laptop.image} alt={laptop.name} />
      <p>{laptop.description}</p>
      <p>{laptop.isSale ? laptop.price * 0.8 : laptop.price}</p>
    </li>
  );
};

export default LaptopeListItem;
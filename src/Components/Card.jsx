import React from 'react';
import Button from './Button';

const Card = ({ randomColor, getRandomValues }) => {
  return (
    <div className={`card ${randomColor}`}>
      <div className="card-body">
        <h3 className="card-title">titulo</h3>
        <p className="card-text">Lorem ipsum dolor sit amet.</p>
        <Button getRandomValues={getRandomValues}></Button>
      </div>
    </div>
  );
};

export default Card;

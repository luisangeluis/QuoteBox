import React from 'react';
import Button from './Button';

const Card = ({ randomColor, randomQuote, getRandomValues }) => {
  console.log(randomQuote);
  return (
    <div className={`card color-${randomColor}`}>
      <div className="card-body">
        <p className="card-text">{randomQuote.quote}</p>
        <h3 className="card-title">{randomQuote.author}</h3>

        <Button getRandomValues={getRandomValues}></Button>
      </div>
    </div>
  );
};

export default Card;

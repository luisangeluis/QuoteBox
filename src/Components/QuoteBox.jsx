import React from 'react';
import Button from './Button';

const QuoteBox = ({ randomColor, randomQuote, getRandomValues }) => {
  return (
    <div className={`card color-${randomColor}`}>
      <i className="fa-solid fa-quote-left"></i>
      <div className="card-body">
        <p className="card-text">{randomQuote.quote}</p>
        <h3 className="card-title">{randomQuote.author}</h3>
        <Button
          getRandomValues={getRandomValues}
          randomColor={randomColor}
        ></Button>
      </div>
    </div>
  );
};

export default QuoteBox;

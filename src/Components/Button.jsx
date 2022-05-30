import React from 'react';

const Button = ({ getRandomValues, randomColor }) => {
  return (
    <button onClick={getRandomValues} className={randomColor}>
      <i className="fa-solid fa-angle-right"></i>
    </button>
  );
};
export default Button;

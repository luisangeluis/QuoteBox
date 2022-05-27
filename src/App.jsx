import { useState } from 'react';
import React from 'react';
import './App.css';
import Card from './Components/Card.jsx';
import quotes from './json/quotes.json';

const colors = ['blue', 'red', 'black', 'yellow'];

function App() {
  const getRandomIndex = (array) => {
    const randomIndexColor = Math.floor(Math.random() * array.length);
    return randomIndexColor;
  };

  const [randomColor, setRandomColor] = useState(
    colors[getRandomIndex(colors)]
  );
  const [randomQuote, setRandomQuote] = useState(
    quotes[getRandomIndex(quotes)]
  );

  const getRandomValues = () => {
    let colorRandomIndex = getRandomIndex(colors);
    let quoteRandomIndex = getRandomIndex(quotes);

    setRandomColor(colors[colorRandomIndex]);
    setRandomQuote(quotes[quoteRandomIndex]);
  };

  return (
    <div className={`container ${randomColor}`}>
      <Card
        randomColor={randomColor}
        randomQuote={randomQuote}
        getRandomValues={getRandomValues}
      ></Card>
    </div>
  );
}

export default App;

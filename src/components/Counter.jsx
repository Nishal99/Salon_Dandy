import React, { useState, useEffect } from 'react';

const CounterItem = ({ number, text }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startNumber = 0;

    const counterUp = () => {
      startNumber++;
      if (startNumber <= number) {
        setCount(startNumber);
      } else {
        clearInterval(interval);
      }
    };

    const interval = setInterval(counterUp, 50);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [number]);

  return (
    <div className="item">
      <h1 className="count">{count}{number === 1000 ? '+' : ''}</h1>
      <h3 className="text">{text}</h3>
    </div>
  );
};

export default CounterItem;

import React from 'react';
import Counter from './Counter';

const CounterWrapper = () => {
  return (
    <div id="counter">
      <Counter number={1000} text="Happy Clients" />
      <Counter number={8} text="Expert Beauticians" />
      <Counter number={96} text="TV Programmes" />
      <Counter number={50} text="Award Winnings" />
    </div>
  );
};

export default CounterWrapper;

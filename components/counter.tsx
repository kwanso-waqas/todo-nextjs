import React from 'react';
import { observer, inject } from 'mobx-react';

const Counter = (props: any): JSX.Element => {
  const { store } = props;
  return (
    <>
      <h1>Counter: {store.counter}</h1>
      <button onClick={() => store.increment()}>increment(+1)</button>
      <br/>
      <button onClick={() => store.decrement()}>decrement(-1)</button>

    </>
  );
}

export default inject('store')(observer(Counter));

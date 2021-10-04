import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { CounterActions } from '../store';

const Counter = () => {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter</h1>
      <button onClick={() => dispatch(CounterActions.decrement())}>-</button>
      {count}
      <button onClick={() => dispatch(CounterActions.increment())}>+</button>
    </div>
  );
};

export default Counter;

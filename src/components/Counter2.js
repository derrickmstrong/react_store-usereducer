import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../store/actions/counterActions';

const Counter = ({count, decr, incr}) => {
  return (
    <div>
      <h1>Counter</h1>
      <button onClick={() => decr()}>-</button> 
      {count}{' '}
      <button onClick={() => incr()}>+</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    count: state.counter.count,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    decr: () => dispatch(decrement()),
    incr: () => dispatch(increment()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);

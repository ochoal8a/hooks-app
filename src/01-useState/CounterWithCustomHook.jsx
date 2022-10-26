import React from "react";
import { useCounter } from "../hooks/useCounter";

const CounterWithCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter();

  return (
    <div className="text-center">
      <h1> Counter with Hook: {counter}</h1>
      <hr></hr>
      <button className="btn btn-primary" onClick={()=> increment(2)}>
        +1
      </button>
      <button className="btn btn-danger" onClick={reset}>
        reset
      </button>
      <button className="btn btn-warning" onClick={()=> decrement(2)}>
        -1
      </button>
    </div>
  );
};

export default CounterWithCustomHook;

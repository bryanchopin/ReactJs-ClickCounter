import React from "react";
import '../styles/counter.css';

function Counter({ value }) {
  return (
    <div className="counterContainer">
      <span className="counterValue">{value}</span>
    </div>
  );
}

export default Counter;
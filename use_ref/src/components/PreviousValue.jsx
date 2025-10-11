import React, { useState, useEffect, useRef } from "react";

function PreviousValue() {
  const [count, setCount] = useState(0);
  const prevCount = useRef();

  useEffect(() => {
    prevCount.current = count; // store current count in ref
  });

  return (
    <div>
      <p>Current: {count}</p>
      <p>Previous: {prevCount.current}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default PreviousValue;

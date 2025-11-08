import React, { useEffect, useState } from "react";

function CountUpNumber({ target, duration }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target);
    const totalDuration = duration; // in milliseconds
    const incrementTime = 20; // how often to update (ms)
    const step = Math.ceil(end / (totalDuration / incrementTime));

    const counter = setInterval(() => {
      start += step;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setCount(start);
    }, incrementTime);

    return () => clearInterval(counter);
  }, [target, duration]);

  return (
    <div style={{ fontSize: "40px", fontWeight: "bold", color: "#2ecc71" }}>
      {count.toLocaleString()}
    </div>
  );
}

export default CountUpNumber;

import React, { useRef, useState } from "react";

const Ref1 = () => {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);
  console.log(renderCount.current);

  renderCount.current = renderCount.current + 1;

  return (
    <>
      <div>
        <p>count : {count} </p>
        <p> this compound renders {renderCount.current} times </p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    </>
  );
};

export default Ref1;

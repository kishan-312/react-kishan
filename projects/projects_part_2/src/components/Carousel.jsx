import React, { useState } from "react";

const Carousel = () => {
  const items = [1, 2, 3, 4, 5];
  const [index, setIndex] = useState(0);

  const next = () => {
    if (index < items.length - 3) setIndex(index + 1); // show 3 items at a time
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px", }}>
      <div
        style={{
          display: "flex",
          overflow: "hidden",
          width: "660px",
          margin: "0 auto",
          border: "2px solid #ccc",
          backgroundColor: "black"
        }}
      >
        <div
          style={{
            display: "flex",
            transform: `translateX(-${index * 220}px)`,
            transition: "transform 0.5s ease-in-out",
            backgroundColor: "red"
          }}
        >
          {items.map((item) => (
            <div
              key={item}
              style={{
                minWidth: "200px",
                margin: "10px",
                background: "#f4f4f4",
                lineHeight: "100px",
                fontSize: "24px",
                border: "1px solid #999",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <button onClick={prev}>Prev</button>
      <button onClick={next} style={{ marginLeft: "10px" }}>
        Next
      </button>
    </div>
  );
};

export default Carousel;

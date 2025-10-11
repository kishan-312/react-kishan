import React, { useMemo } from "react";

const UseMemo = React.memo(({ text }) => {
  console.log("child re-rendered");

  function square(num) {
    //
    console.log("square");
    return num * num;
  }

  const result = useMemo(() => square(text), [text]);

  return (
    <>
      <h1> Cube : {result} </h1>
    </>
  );
});

export default UseMemo;

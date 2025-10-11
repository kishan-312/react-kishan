import React, { useState } from "react";
import UseMemo from "./components/UseMemo";

const App = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  return (
    <>
      <h1>Count : {count} </h1>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button onClick={() => setCount(count + 1)}> Increase </button>
      <UseMemo text={text} />
    </>
  );
};

export default App;

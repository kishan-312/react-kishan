import React, { useCallback, useState } from 'react'
import UseCallback2 from './UseCallback2'

function UseCallback() {

    const [count, setCount] = useState(0)

    const handler = useCallback(() => {

        setCount((prev) => prev + 1)

    }, [])

    return (
        <>
            <UseCallback2 handler={handler} />
            <p>{count}</p>
            <button onClick={() => setCount(count - 1)} >Decrease</button>
        </>
    )
}

export default UseCallback


// Great ✅ Let’s learn useCallback in a simple + deep way — with clear examples and why we use it.

// 🎯 What is useCallback?

// useCallback is used to store (memoize) a function, so the function is not recreated on every render.

// Syntax:
// const memoizedFn = useCallback(() => {
//   // function work
// }, [dependencies]);

// 🤔 Why do we need useCallback?

// In React, functions are re-created every time the component re-renders.

// This can cause unnecessary re-renders in child components when using:

// React.memo()

// Components depending on reference equality

// useCallback prevents that by keeping the same function reference until dependencies change.

// ✅ Simple Understanding

// Without useCallback:

// Parent Re-renders → Function re-created → Child re-renders (unnecessary)


// With useCallback:

// Parent Re-renders → Function stays same → Child does NOT re-render

// ✅ Use Case 1: Prevent Child Re-render
// Child Component
// import React from "react";

// function Child({ onClick }) {
//   console.log("Child Rendered");
//   return <button onClick={onClick}>Click Child</button>;
// }

// export default React.memo(Child); // Memoized Child

// Parent Component
// import React, { useState, useCallback } from "react";
// import Child from "./Child";

// function Parent() {
//   const [count, setCount] = useState(0);

//   const handleClick = useCallback(() => {
//     console.log("Child clicked");
//   }, []); // <-- Same function every render

//   return (
//     <>
//       <h2>{count}</h2>
//       <button onClick={() => setCount(count + 1)}>Increment</button>

//       <Child onClick={handleClick} />
//     </>
//   );
// }

// export default Parent;

// 🎉 Output:

// Parent re-renders → Child does not re-render

// Because handleClick reference did not change

// ❌ Without useCallback
// const handleClick = () => { ... };


// Child will re-render every time, even if it doesn’t need to.

// ✅ Use Case 2: useCallback with dependencies
// const handleChange = useCallback(() => {
//   console.log(name);
// }, [name]);


// Function will re-memoize only when name changes.

// ✅ Use Case 3: Perfect Combo → useCallback + React.memo
// Purpose	Hook/Tool
// Stop child from re-rendering	React.memo
// Keep same function reference	useCallback

// 🔗 They are used together most of the time.

// ⚠️ Important Rule (When to Use)
// Use useCallback When:	Do NOT use when:
// Passing function to memoized child	Function is small + no memo child
// Function is expensive to create	No performance issue
// Dependencies rarely change	Dependencies change frequently

// If there is no performance problem → Don’t use it.

// 🧠 Summary Table
// Hook	What it Stores	Re-render Trigger
// useState	Value	When value changes
// useRef	Value	Never triggers re-render
// useCallback	Function reference	When dependencies change
// useMemo	Return value of function	When dependencies change
// 🎉 Done!

// Now you understand useCallback like a pro.

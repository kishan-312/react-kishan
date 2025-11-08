import React from 'react'

function UseMemo() {

    const [count, setCount] = useState(0);

    const heavyValue = useMemo(() => {
        console.log("Heavy calculation running...");
        let x = 0;
        for (let i = 0; i < 200000000; i++) {
            x += i;
        }
        return x;
    }, []); // runs only once ✅

    return (
        <div>UseMemo</div>
    )
}

export default UseMemo

// 🎯 What is useMemo?

// useMemo is used to memoize (remember) the result of a function, so that the function does not re-run every time the component re-renders unless needed.

// Syntax
// const memoValue = useMemo(() => {
//   // expensive logic
//   return result;
// }, [dependencies]);

// 🤔 Why We Use useMemo?

// In React, component re-renders cause all functions to run again.

// If some logic is heavy (like filtering, sorting, loops, API-like calculations), we want to avoid re-running it unnecessarily.

// useMemo helps with performance optimization.

// ✅ Use Case 1: Expensive Calculation
// import React, { useState, useMemo } from "react";

// function ExpensiveCalculation() {
//   const [count, setCount] = useState(0);

//   const heavyValue = useMemo(() => {
//     console.log("Heavy calculation running...");
//     let x = 0;
//     for (let i = 0; i < 200000000; i++) {
//       x += i;
//     }
//     return x;
//   }, []); // runs only once ✅

//   return (
//     <>
//       <h2>Heavy Value: {heavyValue}</h2>
//       <h2>Count: {count}</h2>
//       <button onClick={() => setCount(count + 1)}>+</button>
//     </>
//   );
// }

// Without useMemo:

// Heavy loop runs every render → Slow UI ❌

// With useMemo:

// Runs only once ✅

// UI stays smooth 🏎️

// ✅ Use Case 2: Memoizing Derived (Calculated) State
// const filteredUsers = useMemo(() => {
//   return users.filter((user) => user.age > 18);
// }, [users]);


// Runs only when users changes

// Not every re-render

// ✅ Use Case 3: Prevent Re-render When Passing Data to Memoized Child
// Child.js
// import React from 'react';
// export default React.memo(function Child({ data }) {
//   console.log("Child Rendered");
//   return <h3>{JSON.stringify(data)}</h3>;
// });

// Parent.js
// import React, { useState, useMemo } from "react";
// import Child from "./Child";

// function Parent() {
//   const [count, setCount] = useState(0);

//   const data = useMemo(() => ({ number: 5 }), []);
//   // ✅ object reference remains same

//   return (
//     <>
//       <h2>{count}</h2>
//       <button onClick={() => setCount(count + 1)}>+</button>
//       <Child data={data} />
//     </>
//   );
// }

// export default Parent;

// Without useMemo:

// data object is new each render → Child re-renders ❌

// With useMemo:

// data reference stays same → Child does not re-render ✅

// ✅ Use Case 4: Sorting / Filtering Lists
// const sortedProducts = useMemo(() => {
//   return [...products].sort((a, b) => a.price - b.price);
// }, [products]);


// Doesn't re-sort list unless products actually change.

// ⚠️ When NOT to Use useMemo
// Do NOT use if	Why
// Calculation is very small	Optimization wasted
// State changes frequently	Memoization might cost more than benefit
// Rule:

// Use only when needed for performance.

// 🧠 Difference Between useMemo and useCallback
// Hook	Stores	Ideal For
// useMemo	Result of function	Heavy calculations
// useCallback	Function itself	Passing function to child
// 🧠 Summary Table
// Concept	Re-renders?	Stores	Use Case
// useState	Yes	value	UI state
// useRef	No	value	DOM or persistent variable
// useCallback	No	function reference	prevent child re-render
// useMemo	No	calculated value	heavy or repeated calculation
// 🎉 Done! You understand useMemo like a pro.

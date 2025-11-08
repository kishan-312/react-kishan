import React, { useEffect, useRef, useState } from 'react'

function UseRef() {

    const [count, setCount] = useState(0);
    const prev = useRef(0)

    useEffect(() => {

        prev.current = count

    }, [count])

    return (
        <>
            <p>Current : {count} </p>
            <p>Previous :{prev.current} </p>
            <button onClick={() => setCount(count + 1)} >Click</button>
        </>
    )
}

export default UseRef


// Perfect ✅ Now let’s learn useRef in a simple and deep way — with all real use cases and examples.

// 🎯 What is useRef?

// useRef is a hook used to store a value that does not re-render the component when it changes.

// Syntax:
// const ref = useRef(initialValue);

// Property	Meaning
// ref.current	The value stored and can be changed directly
// Changing ref.current	Does NOT re-render the component
// ✅ Use Case 1: Access DOM Elements (Main Use)
// function InputFocus() {
//   const inputRef = useRef();

//   const focusInput = () => {
//     inputRef.current.focus();
//   };

//   return (
//     <>
//       <input ref={inputRef} placeholder="Type here..." />
//       <button onClick={focusInput}>Focus Input</button>
//     </>
//   );
// }


// 🔹 No state needed
// 🔹 Direct DOM control, like document.querySelector but React way

// ✅ Use Case 2: Store Mutable Value Without Re-render
// Example: Count how many times component renders
// function RenderCount() {
//   const renderRef = useRef(0);

//   renderRef.current++; // value changes but no re-render

//   return <h2>Rendered: {renderRef.current} times</h2>;
// }

// ✅ Use Case 3: Store Previous State Value
// function PreviousState() {
//   const [count, setCount] = useState(0);
//   const prevCount = useRef();

//   useEffect(() => {
//     prevCount.current = count;
//   }, [count]);

//   return (
//     <>
//       <h2>Current: {count}</h2>
//       <h3>Previous: {prevCount.current}</h3>
//       <button onClick={() => setCount(count + 1)}>+</button>
//     </>
//   );
// }

// ✅ Use Case 4: Avoid Re-creating Timer / Interval
// function Timer() {
//   const timerRef = useRef(null);
//   const [count, setCount] = useState(0);

//   const start = () => {
//     timerRef.current = setInterval(() => setCount(c => c + 1), 1000);
//   };

//   const stop = () => {
//     clearInterval(timerRef.current);
//   };

//   return (
//     <>
//       <h2>{count}</h2>
//       <button onClick={start}>Start</button>
//       <button onClick={stop}>Stop</button>
//     </>
//   );
// }

// ✅ Use Case 5: Uncontrolled Form Handling
// function UncontrolledForm() {
//   const nameRef = useRef();
//   const emailRef = useRef();

//   const handleSubmit = () => {
//     console.log("Name:", nameRef.current.value);
//     console.log("Email:", emailRef.current.value);
//   };

//   return (
//     <>
//       <input ref={nameRef} placeholder="Name" />
//       <input ref={emailRef} placeholder="Email" />
//       <button onClick={handleSubmit}>Submit</button>
//     </>
//   );
// }


// ✅ No state needed
// ✅ Fast input reading

// ✅ Use Case 6: Store Values Between Renders (Persist Data)

// useRef keeps value even if component re-renders.

// const myRef = useRef(10);
// myRef.current = 100; // persist change


// If this was done in useState, UI would re-render — but with useRef, UI will NOT re-render.

// 🧠 Key Differences
// Feature	useState	useRef
// Change triggers re-render	✅ Yes	❌ No
// Stores values between renders	✅ Yes	✅ Yes
// Works with DOM	❌ No	✅ Yes
// 🎉 Summary
// Purpose	Example
// Access DOM	inputRef.current.focus()
// Store values without re-render	ref.current++
// Store previous state	prev.current = state
// Manage timers / intervals	clearInterval(ref.current)
// Uncontrolled forms	inputRef.current.value
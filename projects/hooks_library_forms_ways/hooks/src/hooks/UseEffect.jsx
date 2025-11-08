import React, { useEffect } from 'react'

function UseEffect() {

    useEffect(() => {



    }, [])

    return (
        <>

        </>
    )
}

export default UseEffect


// Perfect ✅ Now let’s learn useEffect in a deep but very simple way, covering all use cases with examples.

// 🎯 What is useEffect?

// useEffect allows you to run side effects in React components.

// Side Effects = Anything outside normal UI update, like:

// API calls

// Subscriptions (event listener, socket)

// LocalStorage access

// Timers (setTimeout / setInterval)

// Updating document title

// Syntax:
// useEffect(() => {
//   // work to do
// }, [dependencies]);

// Dependency	When Effect Runs
// [] empty	Runs only once (on mount)
// Nothing useEffect(()=>{})	Runs on every render
// [value]	Runs when value changes
// ✅ 1. useEffect (Runs Every Render)

// Generally rarely used in real projects.

// useEffect(() => {
//   console.log("Component rendered");
// });

// ✅ 2. useEffect (Run Only Once on Mount)

// Used for API calls.

// useEffect(() => {
//   console.log("Runs only once");
// }, []);


// Example with API:

// useEffect(() => {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then(res => res.json())
//     .then(data => console.log(data));
// }, []);

// ✅ 3. useEffect with Dependency

// Runs when dependency changes.

// const [count, setCount] = useState(0);

// useEffect(() => {
//   console.log("Count changed:", count);
// }, [count]);

// ✅ 4. useEffect for Document Title
// useEffect(() => {
//   document.title = `You clicked ${count} times`;
// }, [count]);

// ✅ 5. useEffect with Multiple Dependencies
// useEffect(() => {
//   console.log("Either name or age changed");
// }, [name, age]);

// ✅ 6. Cleanup in useEffect

// Used for event listeners, subscriptions, timers.

// useEffect(() => {
//   const handleResize = () => console.log(window.innerWidth);
//   window.addEventListener("resize", handleResize);

//   return () => {
//     window.removeEventListener("resize", handleResize);
//   };
// }, []);

// Explanation:

// return () => {...} executes when component unmounts → to prevent memory leaks.

// ✅ 7. useEffect for setInterval / setTimeout
// useEffect(() => {
//   const timer = setInterval(() => {
//     console.log("Running...");
//   }, 1000);

//   return () => clearInterval(timer); // cleanup
// }, []);

// ✅ 8. Fetch Data + Set State
// function Users() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(res => res.json())
//       .then(data => setUsers(data));
//   }, []);

//   return (
//     <ul>
//       {users.map(u => <li key={u.id}>{u.name}</li>)}
//     </ul>
//   );
// }

// ✅ 9. useEffect Reading/Writing LocalStorage
// Save value to localStorage when it changes:
// useEffect(() => {
//   localStorage.setItem("name", name);
// }, [name]);

// Load value on mount:
// useEffect(() => {
//   const stored = localStorage.getItem("name");
//   if (stored) setName(stored);
// }, []);

// ✅ 10. Compare useEffect vs useLayoutEffect
// Hook	Runs When?	Use Case
// useEffect	After render is painted	API call, logging, timers
// useLayoutEffect	Before screen paint (blocking)	Layout measurements (rare)

// So always use useEffect unless doing advanced UI measurements.

// 🚫 Common Mistakes to Avoid
// Mistake	Fix
// Using setState inside effect without dependencies → causes infinite loop	Add dependencies [value]
// Forget cleanup when adding event listeners	Always return a cleanup function
// Doing API call without empty dependency	useEffect(() => {...}, [])
// 🧠 Summary Table
// Pattern	When Needed	Example
// useEffect(() => {})	Every render	console.log("render")
// useEffect(() => {}, [])	Page load only	Fetch data once
// useEffect(() => {}, [x])	When x changes	Re-run logic based on state/prop
// Cleanup	Remove listener/timer	return () => {...}
// 🎉 Done!

// Now you fully understand useEffect.

// =================================================

// Answer (Simple & Clear):
// When we say "outside normal UI update", it means:

// React is updating something (state, DOM, rendering) in a way that does NOT follow the usual React render cycle.

// ✅ Normal UI Update = React Render Cycle

// Normally, UI updates happen like this:

// State changes (setState, useState)

// React re-renders the component

// React updates the UI on the screen

// Example (Normal update):

// setCount(count + 1); // UI re-renders normally

// ❌ Outside Normal UI Update = Update that React did NOT Plan

// These happen when:

// You update the DOM directly (not through React)

// You use setTimeout, setInterval, Promise, Event listeners

// Code runs after render, not during render

// Example:

// setTimeout(() => {
//   setCount(c => c + 1); // This update happens later, outside normal UI flow
// }, 1000);


// React did the initial UI update… then later this comes from outside, so React must do another update.

// Another Example

// Direct DOM manipulation (BAD):

// document.getElementById("box").style.color = "red";


// React didn’t do this.
// This change is outside normal UI control, so React can't track it.

// Why React Cares?

// React wants to:

// Batch updates (do multiple updates at once for better performance)

// Avoid unnecessary re-renders

// Keep UI predictable

// But when updates come from outside (like setTimeout), React can’t batch them easily → so it marks them as "outside normal UI update".

// In short:
// Update Type	Description	Example
// Normal UI Update	Happens inside React flow	setState in event handler
// Outside Normal UI Update	Happens from external async code or manual DOM changes	setTimeout, manual DOM manipulation
// Final Simple Definition ✨

// "Outside normal UI update" means the UI is updated from code that runs outside React’s regular render cycle, like asynchronous functions or direct DOM changes.

// If you want, I can now show:
// ✅ In useEffect
// ✅ In event handler
// ✅ With batching
// ✅ With example animations






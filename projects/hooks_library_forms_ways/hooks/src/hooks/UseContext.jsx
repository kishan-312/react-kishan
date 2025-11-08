

import React, { useContext } from 'react'
import { themeContext } from './useContext/themeContext'

function UseContext() {

    const { name } = useContext(themeContext)

    return (
        <>
            <h1>{name}</h1>

        </>
    )
}

export default UseContext


// Awesome ✅ Let’s learn useContext in a simple and deep way — with all use cases and full examples.

// 🎯 What is useContext?

// useContext is used to share data (state) across multiple components without passing props manually (prop drilling).

// Example Problem:
// App → Parent → Child → Button


// If Button needs a value from App, we usually pass props step-by-step.
// That becomes messy.

// 👉 useContext solves this.

// 🧱 useContext Has 2 Parts
// Part	Meaning
// Context Provider	Gives data to the tree
// useContext Hook	Consumes the data anywhere
// ✅ Step-by-Step Example (Very Simple)
// 1. Create Context
// import { createContext } from "react";

// export const ThemeContext = createContext();

// 2. Wrap App with Provider
// import React, { useState } from "react";
// import { ThemeContext } from "./ThemeContext";
// import Home from "./Home";

// function App() {
//   const [theme, setTheme] = useState("light");

//   return (
//     <ThemeContext.Provider value={{ theme, setTheme }}>
//       <Home />
//     </ThemeContext.Provider>
//   );
// }

// export default App;

// 3. Consume Context in Any Component
// import React, { useContext } from "react";
// import { ThemeContext } from "./ThemeContext";

// function Home() {
//   const { theme, setTheme } = useContext(ThemeContext);

//   return (
//     <>
//       <h2>Current Theme: {theme}</h2>
//       <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
//         Toggle Theme
//       </button>
//     </>
//   );
// }

// export default Home;

// 🎉 Output:

// Click button → Light ↔ Dark

// No props used anywhere ❌

// Data shared across components ✅

// ✅ Another Real Example: Logged-in User Data
// Create Context:
// export const UserContext = createContext();

// Provider:
// function App() {
//   const user = { name: "Kishan", role: "CEO" };

//   return (
//     <UserContext.Provider value={user}>
//       <Dashboard />
//     </UserContext.Provider>
//   );
// }

// Consume Anywhere:
// function Dashboard() {
//   const user = useContext(UserContext);

//   return <h1>Welcome, {user.name} ({user.role})</h1>;
// }

// ✅ useContext With Multiple Values

// Just send object:

// <ThemeContext.Provider value={{ theme, setTheme, color, setColor }}>


// Retrieve:

// const { theme, setTheme, color } = useContext(ThemeContext);

// ✅ useContext + useReducer (Best Pattern for Global State)

// When app gets bigger → useReducer + useContext is better than Redux for small apps.

// const CountContext = createContext();

// function App() {
//   const [count, dispatch] = useReducer((state, action) => {
//     if(action === "inc") return state + 1;
//     return state;
//   }, 0);

//   return (
//     <CountContext.Provider value={{ count, dispatch }}>
//       <Child />
//     </CountContext.Provider>
//   );
// }

// function Child() {
//   const { count, dispatch } = useContext(CountContext);
//   return (
//     <>
//       <h2>{count}</h2>
//       <button onClick={() => dispatch("inc")}>+</button>
//     </>
//   );
// }

// 🆚 useContext vs Redux
// Feature	useContext	Redux Toolkit
// Best for	Small/Medium apps	Large apps
// Setup	Very simple	More structured
// State Update Logic	Scattered	Centralized Reducers
// Performance	Re-renders often	Optimized
// 🧠 Key Points to Remember
// Rule	Meaning
// Must wrap components inside Provider	Otherwise useContext gives undefined
// Any child component can use data	No matter how deep it is
// useContext does NOT manage state	It only shares it
// 🎯 Done!

// You now fully understand useContext.
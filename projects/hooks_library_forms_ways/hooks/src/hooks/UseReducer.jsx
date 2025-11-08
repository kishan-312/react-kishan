import React, { useReducer } from 'react'

const initialState = {

    count: 0

}

function reducer(state, action) {

    if (action.type === "inc") {

        return {

            count: state.count + 1

        }

    }

}

function UseReducer() {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <>
            <p>{state.count}</p>
            <button onClick={() => dispatch({ type: "inc" })} >Inc</button>

        </>
    )
}

export default UseReducer

// Perfect ✅ Now let’s learn useReducer in a simple and clear way — with all use cases and examples.

// 🎯 What is useReducer?

// useReducer is like an advanced version of useState.

// You use it when:

// State logic is complex (multiple related values)

// You want clean and organized updates

// When one state depends on another

// For bigger forms / toggles / counters / todo lists

// When state transitions follow clear actions → like Redux.

// 🧠 Basic Syntax
// const [state, dispatch] = useReducer(reducer, initialState);

// Term	Meaning
// state	The current state value
// dispatch	Function to send instructions
// reducer(state, action)	Function that decides how state should update
// initialState	Starting state
// ✅ 1. Basic Counter Example
// import React, { useReducer } from "react";

// function reducer(state, action) {
//   switch (action.type) {
//     case "increment":
//       return state + 1;
//     case "decrement":
//       return state - 1;
//     case "reset":
//       return 0;
//     default:
//       return state;
//   }
// }

// export default function Counter() {
//   const [count, dispatch] = useReducer(reducer, 0);

//   return (
//     <>
//       <h2>Count: {count}</h2>
//       <button onClick={() => dispatch({ type: "increment" })}>+</button>
//       <button onClick={() => dispatch({ type: "decrement" })}>-</button>
//       <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
//     </>
//   );
// }

// ✅ 2. useReducer with Multiple State Values (Object State)
// const initialState = { name: "", age: "" };

// function reducer(state, action) {
//   return { ...state, [action.field]: action.value };
// }

// export default function Form() {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <>
//       <input
//         placeholder="Name"
//         onChange={(e) =>
//           dispatch({ field: "name", value: e.target.value })
//         }
//       />
//       <input
//         placeholder="Age"
//         onChange={(e) =>
//           dispatch({ field: "age", value: e.target.value })
//         }
//       />

//       <p>{state.name} - {state.age}</p>
//     </>
//   );
// }

// 🎯 Why useReducer here?

// Easier than creating 2 states:

// const [name, setName] = useState("");
// const [age, setAge] = useState("");

// ✅ 3. Todo List Example (Most Common Use Case)
// const initialTodos = [];

// function reducer(state, action) {
//   switch (action.type) {
//     case "add":
//       return [...state, action.payload];
//     case "remove":
//       return state.filter((_, i) => i !== action.payload);
//     default:
//       return state;
//   }
// }

// export default function TodoApp() {
//   const [todos, dispatch] = useReducer(reducer, initialTodos);
//   const [text, setText] = useState("");

//   const addTodo = () => {
//     dispatch({ type: "add", payload: text });
//     setText("");
//   };

//   return (
//     <>
//       <input value={text} onChange={(e) => setText(e.target.value)} />
//       <button onClick={addTodo}>Add</button>

//       <ul>
//         {todos.map((t, i) => (
//           <li key={i}>
//             {t} <button onClick={() => dispatch({ type: "remove", payload: i })}>X</button>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

// ✅ 4. useReducer + useContext (Global State Like Redux)

// This is the React replacement for Redux in small apps.

// Create Context + Reducer
// export const CountContext = createContext();

// function reducer(state, action) {
//   if (action === "inc") return state + 1;
//   return state;
// }

// export function App() {
//   const [count, dispatch] = useReducer(reducer, 0);

//   return (
//     <CountContext.Provider value={{ count, dispatch }}>
//       <Child />
//     </CountContext.Provider>
//   );
// }

// Consume in any component
// function Child() {
//   const { count, dispatch } = useContext(CountContext);

//   return (
//     <>
//       <h2>{count}</h2>
//       <button onClick={() => dispatch("inc")}>+</button>
//     </>
//   );
// }

// 🆚 useState vs useReducer
// Feature	useState	useReducer
// Best for	Simple state	Complex / multi-value state
// Update style	Direct value update	Action-based logic
// Code readability	Good for small logic	Cleaner for large logic
// Similar to Redux?	❌ No	✅ Yes
// 🧠 When to Use Which?
// Condition	Choose
// State is simple	useState
// State updates depend on previous state	useReducer
// Multiple states modify together	useReducer
// You need centralized logic	useReducer
// Want Redux but lighter	useReducer + useContext
// 🎉 Done!

// Now you fully understand useReducer.

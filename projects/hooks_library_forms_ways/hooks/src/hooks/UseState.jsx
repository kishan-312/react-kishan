import React, { useState } from 'react'

function UseState() {

    // const [state, setState] = useState(initialValue)
    // const [state, setState] = useState("")
    // const [state, setState] = useState(false)
    const [state, setState] = useState(0)
    // const [state, setState] = useState([])
    // const [state, setState] = useState({})
    // const [state, setState] = useState(() => {

    //     console.log("lazy intialState");
    //     return 100

    // })

    return (
        <>
            <div>
                {

                    state
                }
            </div>

        </>
    )
}

export default UseState


// 🎯 What is useState?

// useState is a React Hook that allows you to create and manage state inside a functional component.

// const [value, setValue] = useState(initialValue);

// Term	Meaning
// value	Current data stored in state
// setValue	Function to update that data
// initialValue	Starting value (number, string, array, object, boolean, function)
// ✅ 1. useState with Simple Values
// Example (Counter)
// import React, { useState } from "react";

// function Counter() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <h2>Count: {count}</h2>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </>
//   );
// }

// ✅ 2. useState with String
// function InputExample() {
//   const [name, setName] = useState("");

//   return (
//     <>
//       <input
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         placeholder="Enter Name"
//       />
//       <p>Hello, {name}</p>
//     </>
//   );
// }

// ✅ 3. useState with Boolean (Toggle)
// function Toggle() {
//   const [isDark, setIsDark] = useState(false);

//   return (
//     <>
//       <button onClick={() => setIsDark(!isDark)}>
//         Switch to {isDark ? "Light" : "Dark"} Mode
//       </button>
//     </>
//   );
// }

// ✅ 4. useState with Array
// Adding items
// function TodoList() {
//   const [todos, setTodos] = useState([]);

//   const addTodo = () => {
//     setTodos([...todos, `Task ${todos.length + 1}`]);
//   };

//   return (
//     <>
//       <button onClick={addTodo}>Add Task</button>
//       <ul>
//         {todos.map((item, index) => <li key={index}>{item}</li>)}
//       </ul>
//     </>
//   );
// }

// ✅ 5. useState with Object
// Updating object properly (copy first)
// function Profile() {
//   const [user, setUser] = useState({ name: "", age: "" });

//   return (
//     <>
//       <input
//         placeholder="Name"
//         onChange={(e) => setUser({ ...user, name: e.target.value })}
//       />

//       <input
//         placeholder="Age"
//         onChange={(e) => setUser({ ...user, age: e.target.value })}
//       />

//       <p>{user.name} - {user.age}</p>
//     </>
//   );
// }

// ✅ 6. Updating State Based on Previous State

// Always use callback when new value depends on old value.

// setCount(prev => prev + 1);


// Full Example:

// <button onClick={() => setCount(prev => prev + 1)}>
//   Increment
// </button>

// ✅ 7. Lazy Initial State (initialize once)

// Used when initial value is expensive to calculate.

// const [value, setValue] = useState(() => {
//   console.log("Runs only once");
//   return 100;
// });

// ✅ 8. useState with Multiple State Variables
// function Form() {
//   const [name, setName] = useState("");
//   const [age, setAge] = useState("");
//   const [city, setCity] = useState("");

//   return (
//     <>
//       <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
//       <input placeholder="Age" onChange={(e) => setAge(e.target.value)} />
//       <input placeholder="City" onChange={(e) => setCity(e.target.value)} />

//       <p>{name} - {age} - {city}</p>
//     </>
//   );
// }

// ✅ 9. Reset State
// setCount(0);
// setUser({ name: "", age: "" });
// setTodos([]);

// ✅ 10. UseState to Show/Hide Components
// function ShowHide() {
//   const [show, setShow] = useState(true);

//   return (
//     <>
//       <button onClick={() => setShow(!show)}>Toggle</button>
//       {show && <h3>Hello Kishan 👋</h3>}
//     </>
//   );
// }











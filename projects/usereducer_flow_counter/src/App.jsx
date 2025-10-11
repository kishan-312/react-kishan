import { useReducer } from "react";

const initialState = {
  count: 0,
};

function reducer(state, action) {
  if (action.type === "increment") {
    return { count: state.count + 1 };
  } else if (action.type === "decrement") {
    return { count: state.count - 1 };
  } else {
    return state;
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <span>{state.count}</span>
      <button onClick={() => dispatch({ type: "increment" })}>Inc</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Dec</button>
    </>
  );
};

export default App;

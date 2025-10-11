import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./features/counterSlice";

const App = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <span>{count}</span>
      <button onClick={() => dispatch(increment())}>Inc</button>
      <button onClick={() => dispatch(decrement())}>dec</button>
    </>
  );
};

export default App;

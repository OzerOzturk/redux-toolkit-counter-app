import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease, add10 } from "./app/features/counter/counterSlice";

function App() {
  const state = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h2>counter app redux toolkit </h2>
      <p>{state}</p>
      <button onClick={() => dispatch(increase())}>increase</button>
      <button onClick={() => dispatch(decrease())}>decrease</button>
      <button onClick={() => dispatch(add10(10))}>add10</button>
    </div>
  );
}

export default App;

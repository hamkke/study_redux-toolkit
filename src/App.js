import { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  getGet,
  incrementByAmount,
  getList,
} from "./counterSlice";

function App() {
  const count = useSelector((state) => state.counters.value);
  const list = useSelector((state) => state.counters.list);
  const count2 = useSelector(getGet);
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState("2");

  useEffect(() => {
    dispatch(getList());
  }, [dispatch]);
  // console.log(list);

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>
          {count},{count2}
        </span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>

        <input
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}
        >
          Add Amount
        </button>
        <h2>{incrementAmount}</h2>
        {list.map((a, b) => {
          return <li key={b}>{a.title}</li>;
        })}
      </div>
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  getGet,
} from "./states/counterSlice";
import { getList } from "./states/getAxiosData";

function App() {
  const count = useSelector((state) => state.counterSlice.value);
  const count2 = useSelector(getGet);
  const list = useSelector((state) => state.getDataSlice.list);
  const STATUS = useSelector((state) => state.getDataSlice.status);
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState("2");

  useEffect(() => {
    dispatch(getList());
  }, [dispatch]);

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
        <h2>지금 나는 {STATUS} 상태</h2>
        {list.map((a, b) => {
          console.log(a);
          return <li key={`list-${b}`}>{a.title}</li>;
        })}
      </div>
    </div>
  );
}

export default App;

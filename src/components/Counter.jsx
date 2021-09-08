import { useState } from "react";
import './Counter.css'
export function Counter(props) {
 
  const [count, setCount] = useState(props.inVal);

  const down = () => {
    setCount(count - 1);
  };
  const double = () => {
    setCount(count * 2);
  }

  return (
    <div>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <div className = "btn">
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={down}>-</button>
        <button onClick={double}>Double</button>
      </div>
    </div>
  );
}


import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <main className="app">
      <div className="counter-card">
        <h1>Counter App</h1>

        <div className="count-display">
          {count}
        </div>

        <div className="button-group">
          <button
            className="btn decrement"
            onClick={decrement}
            aria-label="Decrease counter"
          >
            −
          </button>

          <button
            className="btn reset"
            onClick={reset}
          >
            Reset
          </button>

          <button
            className="btn increment"
            onClick={increment}
            aria-label="Increase counter"
          >
            +
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;

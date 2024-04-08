/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(1);
  const [count, setCount] = useState(0);

  function handleCount() {
    setCount(count + 1);
  }

  useEffect(() => {
    if (seconds <= 0) return;

    const timeout = setTimeout(() => {
      setSeconds(seconds - 1);
    }, 30000);

    return () => clearTimeout(timeout);
  }, [seconds]);

  return (
    <div>
      <p>{count}</p>
      <p>time left: {seconds} seconds</p>
      {seconds === 0 ? null : <button onClick={handleCount}>+</button>}
    </div>
  );
}

export default Timer;

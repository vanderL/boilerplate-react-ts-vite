import { useState } from 'react';

export function useCounter() {
  const [count, setCount] = useState<number>(0);

  function increment() {
    setCount((c) => c + 1);
  }

  function decrement() {
    setCount((c) => c - 1);
  }

  function reset() {
    setCount(0);
  }

  return {
    count, increment, decrement, reset,
  };

}

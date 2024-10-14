import "./App.css"
import { useState } from "react";

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <h1>Welcome to my app</h1>
      <button onClick={handleClick}>
        Clicked {count} times
      </button>
    </>
  );
}
export default MyButton
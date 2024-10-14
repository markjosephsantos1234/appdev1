import './App.css'

function MyButton() {
  function handleClick() {
    alert("You clicked me!");
  }

  return (
    <>
      <h1>Welcome to my app</h1>
      <button onClick={handleClick}>
        Click me
      </button>
    </>
  );
}

export default MyButton
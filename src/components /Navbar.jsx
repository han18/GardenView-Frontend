import "../navbar.css";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [click, setClick] = useState("");
  const [count, setCount] = useState(0);
  const [press, setPress] = useState(0);

  // this is getting the API
  async function getAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    console.log(data.slip.advice);
    setClick(data.slip.advice);
    setCount((c) => c + 1);
  }

  useEffect(() => {
    getAdvice();
  }, []);

  function pressMe() {
    setPress((p) => p + 1);
    console.log(press);
  }

  return (
    <>
      <h1 className="nav">NavBar Here</h1>
      <p>{click}</p>

      <button onClick={getAdvice}>Click here</button>
      <p>How many advice per day{count}</p>
    </>
  );
};

export default Navbar;

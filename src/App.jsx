import { useEffect, useState } from "react";

const btns = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "+",
  "-",
  "x",
  "/",
  "=",
  "C",
];

const App = () => {
  let [display, setDisplay] = useState("");
  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    // const res = nums.reduce((acc, cv) => acc + cv, 0);
    if (operator === "+") {
      setResult(num1 + num2);
    }
    if (operator === "-") {
      setResult(num1 - num2);
    }
    if (operator === "x") {
      setResult(num1 * num2);
    }
    if (operator === "/") {
      setResult(num1 / num2);
    }
  }, [num1, num2, operator]);

  const handleNumClick = (btn) => {
    if (!isNaN(btn)) {
      display += btn;
      display = Number(display);
      setDisplay(display);
    }
    if (btn === "+" || btn === "-" || btn === "x" || btn === "/") {
      // setNums([...nums, display]);
      setNum1(display);
      setDisplay("");
      setOperator(btn);
    }
    if (btn === "=") {
      // setNums([...nums, display]);
      setNum2(display);
      setDisplay("");
    }
    if (btn === "C") {
      setDisplay("");
      setNum1(null);
      setNum2(null);
      setResult(null);
    }
  };

  // console.log(nums);

  return (
    <div>
      <h1>Calculator</h1>
      <div className='container'>
        <div className='item'>
          <div className='display'>{display}</div>
        </div>
        <div className='item buttons'>
          {btns.map((btn) => (
            <button
              className='btn'
              key={btn}
              onClick={() => handleNumClick(btn)}
            >
              {btn}
            </button>
          ))}
        </div>
        <div className='display result'>{result}</div>
      </div>
    </div>
  );
};

export default App;

import "./App.css";
import { numbersForState } from "./numbersForState.js";
import React from "react";

var errorMessage = false;

export default function Buttons({
  lowerDisplayNumber,
  setLowerDisplayNumber,
  setUpperDisplayNumber,
  upperDisplayNumber,
  realCalculation,
  setRealCalculation,
}) {
  const prevRealCalculation = React.useRef();
  React.useEffect(() => {
    prevRealCalculation.current = realCalculation;
  }, [realCalculation]);
  // console.log(prevRealCalculation.current);

  let handleClick = (numberOrSymbol) => {
    if (realCalculation >= 99999999999999 && errorMessage === false) {
      errorMessage = true;
      setLowerDisplayNumber("ERROR - DIGIT LIMIT");
      setRealCalculation(0);
    } else if (typeof numberOrSymbol === "string" || errorMessage === true) {
      if (numberOrSymbol === "clear") {
        setLowerDisplayNumber("0");
        setUpperDisplayNumber("");
        setRealCalculation("");
        errorMessage = false;

        // Operation: *** /// --- +++
      } else if (
        numberOrSymbol === "+" ||
        numberOrSymbol === "-" ||
        numberOrSymbol === "*" ||
        numberOrSymbol === "/"
      ) {
        setLowerDisplayNumber(numberOrSymbol);
        setUpperDisplayNumber((prevValue) => prevValue + numberOrSymbol);
     //   setRealCalculation((prevValue) => prevValue + numberOrSymbol);

        //Operation: ... ,,,
      } else if (numberOrSymbol === "." || numberOrSymbol === ",") {
        setLowerDisplayNumber((prevValue) => prevValue + numberOrSymbol);
        setUpperDisplayNumber((prevValue) => `${prevValue}${numberOrSymbol}`);

        //Operation: === Enter
      } else if (numberOrSymbol === "=" || numberOrSymbol === "Enter") {
        setRealCalculation(eval(upperDisplayNumber));

        React.useEffect(() => {
               setUpperDisplayNumber(
          (prevValue) => prevValue + "=" + realCalculation
        );
        setLowerDisplayNumber("= " + realCalculation);
        console.log(realCalculation);
        console.log(prevRealCalculation.current);
        }, [realCalculation])
        
   
        
        




      }
    } else if (typeof numberOrSymbol === "number" && errorMessage === false) {
      if (
        typeof numberOrSymbol === "number" &&
        typeof prevRealCalculation.current === "number"
      ) {
        setLowerDisplayNumber(
          (prevValue) => (prevValue.toString() + numberOrSymbol.toString()) * 1
        );
        setUpperDisplayNumber(
          (prevValue) => prevValue.toString() + numberOrSymbol.toString()
        );
        setRealCalculation(
          (prevValue) => (prevValue.toString() + numberOrSymbol.toString()) * 1
        );
      } else if (typeof numberOrSymbol === "number") {
        setLowerDisplayNumber(
          (prevValue) => prevValue.toString() + numberOrSymbol.toString()
        );
        setRealCalculation((prevValue) => prevValue + numberOrSymbol);
        setUpperDisplayNumber((prevValue) => prevValue + numberOrSymbol);
      }
    }
  };

  console.log(realCalculation);
  let handleKeyDown = (event) => {
    event.key === "*" ||
      event.key === "/" ||
      event.key === "-" ||
      event.key === "+" ||
      event.key === "Enter" ||
      event.key === "," ||
      event.key === "."
      ? handleClick(event.key)
      : handleClick(Number(event.key));
  };

  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [realCalculation]);

  return (
    <div id="buttonGrid">
      <button
        className="myButtons  notNumbers"
        onClick={() => handleClick("clear")}
        id="clear"
      >
        AC
      </button>
      <button
        className="myButtons  notNumbers"
        onClick={() => handleClick("/")}
        id="divide"
      >
        /
      </button>
      <button
        className="myButtons  notNumbers"
        onClick={() => handleClick("*")}
        id="multiply"
      >
        *
      </button>
      <button
        className="myButtons  notNumbers"
        onClick={() => handleClick("-")}
        id="subtract"
      >
        -
      </button>
      <button
        className="myButtons numbers"
        onClick={() => handleClick(7)}
        id="seven"
      >
        7
      </button>
      <button
        className="myButtons numbers"
        onClick={() => handleClick(8)}
        id="eight"
      >
        8
      </button>
      <button
        className="myButtons numbers"
        onClick={() => handleClick(9)}
        id="nine"
      >
        9
      </button>
      <button
        className="myButtons  notNumbers"
        onClick={() => handleClick("+")}
        id="add"
      >
        +
      </button>
      <button
        className="myButtons numbers "
        onClick={() => handleClick(4)}
        id="four"
      >
        4
      </button>
      <button
        className="myButtons numbers "
        onClick={() => handleClick(5)}
        id="five"
      >
        5
      </button>
      <button
        className="myButtons numbers "
        onClick={() => handleClick(6)}
        id="six"
      >
        6
      </button>
      <button
        className="myButtons numbers "
        onClick={() => handleClick(1)}
        id="one"
      >
        1
      </button>
      <button
        className="myButtons numbers "
        onClick={() => handleClick(2)}
        id="two"
      >
        2
      </button>
      <button
        className="myButtons numbers "
        onClick={() => handleClick(3)}
        id="three"
      >
        3
      </button>
      <button
        className="myButtons  notNumbers"
        onClick={() => handleClick("=")}
        id="equals"
      >
        =
      </button>
      <button
        className="myButtons numbers "
        onClick={() => handleClick(0)}
        id="zero"
      >
        0
      </button>
      <button
        className="myButtons  numbers"
        onClick={() => handleClick(".")}
        id="decimal"
      >
        .
      </button>
    </div>
  );
}

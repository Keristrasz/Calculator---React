import "./App.css";
import { numbersForState } from "./numbersForState.js";

var errorMessage = false;

export default function Buttons({
  lowerDisplayNumber,
  setLowerDisplayNumber,
  setUpperDisplayNumber,
  upperDisplayNumber,
  realCalculation,
  setRealCalculation,
}) {
  let handleClick = (numberOrSymbol) => {
    if (realCalculation >= 99999999999999 && errorMessage === false) {
      errorMessage = true;
      setLowerDisplayNumber("ERROR - DIGIT LIMIT");
      setRealCalculation(0);
    } else if (typeof numberOrSymbol === "string" || errorMessage === true) {
      if (numberOrSymbol === "clear") {
        setLowerDisplayNumber(0);
        setUpperDisplayNumber(0);
        setRealCalculation(0);
        errorMessage = false;
        console.log(errorMessage)
      } else if (numberOrSymbol === "+") {
        setLowerDisplayNumber(" +");
        setUpperDisplayNumber(realCalculation + " +");
        setRealCalculation(prevValue => prevValue + realCalculation)
      } else if (numberOrSymbol === "-") {
        setLowerDisplayNumber(" -");
        setUpperDisplayNumber(realCalculation + " -");
      } else if (numberOrSymbol === "/") {
        setLowerDisplayNumber(" /");
        setUpperDisplayNumber(realCalculation + " /");
      } else if (numberOrSymbol === "*") {
        setLowerDisplayNumber(" *");
        setUpperDisplayNumber(realCalculation + " *");
      } else if (numberOrSymbol === "=") {
        setUpperDisplayNumber(realCalculation + " *")
        setLowerDisplayNumber(lowerDisplayNumber + realCalculation);
      }
    } else if (typeof realCalculation === "number") {
      if (errorMessage === false) {
        setLowerDisplayNumber(
          (prevValue) => (prevValue.toString() + numberOrSymbol.toString()) * 1
        );
        setRealCalculation(
          (prevValue) => (prevValue.toString() + numberOrSymbol.toString()) * 1
        );

        console.log(realCalculation + errorMessage);
      }
    }
  };


  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [volume, power, bass]);
  

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

import "./App.css";
import { numbersAndOperations } from "./numbersAndOperations.js";
import React from "react";

var errorMessage = false;
var notAsyncState;

export default function Buttons({
  lowerDisplayNumber,
  setLowerDisplayNumber,
  setUpperDisplayNumber,
  upperDisplayNumber,
}) {
  const prevLowerNumber = React.useRef();

  React.useEffect(() => {
    prevLowerNumber.current = lowerDisplayNumber;
  }, [lowerDisplayNumber]);

  let handleClick = (numberOrSymbol) => {

    /// SHOWS DIGIT LIMIT ERROR ///

    try {

      if (numberOrSymbol === "AC") {
        setLowerDisplayNumber("0");
        setUpperDisplayNumber("");

        errorMessage = false;
      } else if (
        (lowerDisplayNumber > 9999999999 ||
          upperDisplayNumber.toString().length > 25) && errorMessage === false
      ) {
        errorMessage = true;
        setLowerDisplayNumber("ERROR - DIGIT LIMIT");
      }

      ///AFTER EQUAL RESETS LOWER AND UPPER DISPLAY ///

      else if (
        errorMessage === true &&
        lowerDisplayNumber !== "ERROR - DIGIT LIMIT"
      ) {
        //removing "=" sign

        // also it is necessary to store valuable to a different variable than state, because of asynchronous operation (state will not update in time, variable will) - necessary for "string" IF/ELSE IF operation below to work correctly

        // using [prevLowerNumber.current[-1] or 3 also option]

        notAsyncState = Number(
          prevLowerNumber.current.split(" ").splice(1, 1).join()
        );
        setLowerDisplayNumber(notAsyncState);
        setUpperDisplayNumber(notAsyncState);
        errorMessage = false;
        handleClick(numberOrSymbol);
      }

      /// *** STRING STRING STRING *** ///

      else if (typeof numberOrSymbol === "string" || errorMessage === true) {

        // Operation: *** /// --- +++

        if (
          typeof prevLowerNumber.current === "string" &&
          typeof numberOrSymbol === "string" &&
          notAsyncState === undefined
        ) {
          setLowerDisplayNumber("ERROR-WRONG INPUT");
        } else if (
          numberOrSymbol === "+" ||
          numberOrSymbol === "-" ||
          numberOrSymbol === "*" ||
          (numberOrSymbol === "/" && errorMessage === false)
        ) {
          setLowerDisplayNumber(numberOrSymbol.toString());
          setUpperDisplayNumber(
            (prevValue) => prevValue.toString() + numberOrSymbol.toString()
          );

          //Operation: ... ,,,

        } else if (numberOrSymbol === "." || numberOrSymbol === ",") {
          setLowerDisplayNumber((prevValue) => `${prevValue}${numberOrSymbol}`);
          setUpperDisplayNumber((prevValue) => `${prevValue}${numberOrSymbol}`);

          //Operation: === Enter

        } else if (numberOrSymbol === "=" || numberOrSymbol === "Enter") {
          setLowerDisplayNumber(
            "= " + Math.round(eval(upperDisplayNumber) * 10000) / 10000
          );
          setUpperDisplayNumber(
            (prevValue) =>
              prevValue +
              " = " +
              Math.round(eval(upperDisplayNumber) * 10000) / 10000
          );
          errorMessage = true;
        }
        notAsyncState = undefined;
      }

      /// **** NUMBERS NUMBERS NUMBERS **** ///

      else if (typeof numberOrSymbol === "number" && errorMessage === false) {
        if (
          typeof prevLowerNumber.current === "number"
        ) {
          setLowerDisplayNumber(
            (prevValue) => (prevValue.toString() + numberOrSymbol.toString()) * 1
          );
          setUpperDisplayNumber(
            (prevValue) => prevValue.toString() + numberOrSymbol.toString()
          );
        } else {
          setLowerDisplayNumber(numberOrSymbol);

          setUpperDisplayNumber(
            (prevValue) => prevValue.toString() + numberOrSymbol.toString()
          );
        }
      }
    }

    //using try and catch to show evaluation problems in lowerdisplay

    catch (err) {
      setLowerDisplayNumber("ERROR")
    }
  }

  //function for keyboard press

  let handleKeyDown = (event) => {

    //works only for set characters in numberForState.js

    if (numbersAndOperations.all.includes(event.key)) {

      //preventing Enter to do its default function - clicking last clicked buttons

      event.preventDefault();
      numbersAndOperations.operations.includes(event.key)
        ? handleClick(event.key)
        : event.key === ","
          ? handleClick(".")
          : handleClick(Number(event.key));
    }
  };

  //event listener for keypress

  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lowerDisplayNumber]);

  return (
    <div id="buttonGrid">
      <button
        className="myButtons  notNumbers"
        onClick={() => handleClick("AC")}
        id="AC"
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

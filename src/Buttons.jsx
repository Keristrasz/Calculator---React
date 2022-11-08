import "./App.css";
import { numbersForState } from "./numbersForState.js";
import React from "react";

var errorMessage = false;


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
    
    if (lowerDisplayNumber >= 999999999 && errorMessage === false) {
      errorMessage = true;
      setLowerDisplayNumber("ERROR - DIGIT LIMIT");
      
      console.log(error);
    } 

      ///AFTER EQUAL RESETS LOWER AND UPPER DISPLAY ///

    else if (errorMessage === true) {
      
        setLowerDisplayNumber("0");
        setUpperDisplayNumber("");
     
        errorMessage = false;
        handleClick(numberOrSymbol)

        

        /// *** STRING STRING STRING *** ///
      
    }
    else if (typeof numberOrSymbol === "string" || errorMessage === true) {
      if (numberOrSymbol === "clear") {
        setLowerDisplayNumber("0");
        setUpperDisplayNumber("");
       
        errorMessage = false;

        

        // Operation: *** /// --- +++
      } else if (typeof prevLowerNumber.current === "string" && typeof numberOrSymbol === "string") {
      setLowerDisplayNumber("WRONG INPUT");
      console.log(prevLowerNumber.current)
    }
      else if (
        numberOrSymbol === "+" ||
        numberOrSymbol === "-" ||
        numberOrSymbol === "*" ||
        numberOrSymbol === "/"
      ) {
        setLowerDisplayNumber(numberOrSymbol.toString());
        setUpperDisplayNumber(
          (prevValue) => prevValue.toString() + numberOrSymbol.toString()
        );
    

        //Operation: ... ,,,
      } else if (numberOrSymbol === "." || numberOrSymbol === ",") {
        setLowerDisplayNumber((prevValue) => prevValue + numberOrSymbol);
        setUpperDisplayNumber((prevValue) => `${prevValue}${numberOrSymbol}`);

        //Operation: === Enter
      } else if (numberOrSymbol === "=" || numberOrSymbol === "Enter") {
       
        setLowerDisplayNumber("= " + (Math.round(eval(upperDisplayNumber) * 1000 ) / 1000));
        setUpperDisplayNumber(
          (prevValue) => prevValue + " = " + (Math.round(eval(upperDisplayNumber) * 1000 ) / 1000)
         
        );
        errorMessage = true;
 console.log(prevLowerNumber.current)
  
        

        

      }
    } 
    
    /// **** NUMBERS NUMBERS NUMBERS **** ///
    
    else if (typeof numberOrSymbol === "number" && errorMessage === false) {
      if (
        typeof numberOrSymbol === "number" &&
        typeof prevLowerNumber.current === "number"
      ) {
        setLowerDisplayNumber(
          (prevValue) => (prevValue.toString() + numberOrSymbol.toString()) *1
        );
        setUpperDisplayNumber(
          (prevValue) => prevValue.toString() + numberOrSymbol.toString()
        );
      } else if (typeof numberOrSymbol === "number") {
   
        setLowerDisplayNumber(
         numberOrSymbol
        );

        setUpperDisplayNumber(
          (prevValue) => prevValue.toString() + numberOrSymbol.toString()
        );

        
      }
    }
  };

  let handleKeyDown = (event) => {
    //preventing Enter to do its default function - clicking last clicked buttons
   
    if (numbersForState.allKeyboardKeys.includes(event.key)) {
    event.preventDefault();
      event.key === "*" ||
      event.key === "/" ||
      event.key === "-" ||
      event.key === "+" ||
      event.key === "Enter" ||
      event.key === "=" ||
      event.key === "."
        ? handleClick(event.key)
        : event.key === ","
        ? handleClick(".")
        : handleClick(Number(event.key));
    }
  };

  React.useEffect(
    () => {
      window.addEventListener("keydown", handleKeyDown);

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    },
   
    [lowerDisplayNumber]
  );

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

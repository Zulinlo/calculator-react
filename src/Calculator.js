import { useState, useEffect, useRef, useCallback } from "react";
import Blink from "react-blink-text";
import { evaluate, round } from "mathjs";

import "./styles.scss";

const Calculator = () => {
  const [operation, setOperation] = useState("");
  const [typed, setTyped] = useState("");

  let ans = useRef(0);

  const handleInputClick = useCallback(
    (input) => {
      if (typed.length && !typed.includes("ANS") && /[a-zA-Z]/.test(typed)) {
        setOperation("");
        setTyped(`${input}`);
        ans.current = 0;
      } else {
        // Add spacing on operations
        if (/[*+-/%==ANS]/.test(input)) input = ` ${input} `;

        if (input === " . ") input = ".";

        setTyped(`${typed}${input}`);
      }
    },
    [typed]
  );

  const handleCalculate = useCallback(() => {
    if (typed.length === 0) {
      alert("No input");
      return;
    }

    setOperation(`${typed.replace("ANS", ans.current)}`);

    try {
      // If should evaluate to a boolean
      if (typed.includes("==")) {
        setTyped(evaluate(typed.replace("ANS", ans.current)).toString());
      } else {
        let res = round(
          evaluate(typed.replace("ANS", ans.current)),
          9
        ).toString();
        setTyped(res);
        ans.current = res;
      }
    } catch (e) {
      alert(e.message);
    }
  }, [typed]);

  const handleClear = () => {
    setTyped("");
    setOperation("");
  };

  useEffect(() => {
    console.log(typed);
    function onKeyup(e) {
      if (/[0-9.%/*\-+]/.test(e.key)) {
        handleInputClick(e.key);
      } else if (e.key === "a") {
        handleInputClick("ANS");
      } else if (e.key === "Enter") {
        handleCalculate();
      } else if (e.key === "c" || e.key === "Escape" || e.key === "Backspace") {
        handleClear();
      }
    }

    window.addEventListener("keyup", onKeyup);

    // Cleanup
    return () => {
      window.removeEventListener("keyup", onKeyup);
    };
  }, [typed, handleInputClick, handleCalculate]);

  return (
    <section className="calculator">
      <div className="calc-screen">
        <div
          className="calc-operation"
          style={{
            height: "28px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <span className="no-wrap">{operation}</span>
        </div>
        <div
          className="calc-typed"
          style={{
            width: "100%",
            height: "100%",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <span className="no-wrap">{typed}</span>
          <div style={{ position: "absolute", right: "0" }}>
            <Blink color="#E0B612" text="_" fontSize="50px">
              _
            </Blink>
          </div>
        </div>
      </div>
      <div className="calc-button-row">
        <div className="button c" onClick={() => handleClear()}>
          C
        </div>
        <div className="button l" onClick={() => handleInputClick("==")}>
          ==
        </div>
        <div className="button l" onClick={() => handleInputClick("%")}>
          %
        </div>
        <div className="button l" onClick={() => handleInputClick("/")}>
          /
        </div>
      </div>
      <div className="calc-button-row">
        <div className="button" onClick={() => handleInputClick(7)}>
          7
        </div>
        <div className="button" onClick={() => handleInputClick(8)}>
          8
        </div>
        <div className="button" onClick={() => handleInputClick(9)}>
          9
        </div>
        <div className="button l" onClick={() => handleInputClick("*")}>
          x
        </div>
      </div>
      <div className="calc-button-row">
        <div className="button" onClick={() => handleInputClick(4)}>
          4
        </div>
        <div className="button" onClick={() => handleInputClick(5)}>
          5
        </div>
        <div className="button" onClick={() => handleInputClick(6)}>
          6
        </div>
        <div className="button l" onClick={() => handleInputClick("-")}>
          −
        </div>
      </div>
      <div className="calc-button-row">
        <div className="button" onClick={() => handleInputClick(1)}>
          1
        </div>
        <div className="button" onClick={() => handleInputClick(2)}>
          2
        </div>
        <div className="button" onClick={() => handleInputClick(3)}>
          3
        </div>
        <div className="button l" onClick={() => handleInputClick("+")}>
          +
        </div>
      </div>
      <div className="calc-button-row">
        <div className="button" onClick={() => handleInputClick(".")}>
          .
        </div>
        <div className="button" onClick={() => handleInputClick(0)}>
          0
        </div>
        <div
          className="button"
          style={{ padding: "20px 0 20px 0" }}
          onClick={() => handleInputClick("ANS")}
        >
          Ans
        </div>
        <div className="button l" onClick={() => handleCalculate()}>
          =
        </div>
      </div>
    </section>
  );
};

export default Calculator;

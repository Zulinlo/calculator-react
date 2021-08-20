import { useState, useEffect } from "react";
import Blink from "react-blink-text";
import "./styles.scss";

const App = () => {
  const [typed, setTyped] = useState("");
  const [operation, setOperation] = useState("");

  const handleNumberInput = (input) => {
    setTyped(`${typed}${input}`);
  };

  const handleOperationInput = (input) => {};

  const handleClear = () => {
    setTyped("");
    setOperation("");
  };

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
          <span style={{ position: "absolute", right: "0" }}>{typed}</span>
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
          <span style={{ position: "absolute", right: "0px" }}>{typed}</span>
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
        <div className="button l">==</div>
        <div className="button l">%</div>
        <div className="button l">/</div>
      </div>
      <div className="calc-button-row">
        <div className="button" onClick={() => handleNumberInput(7)}>
          7
        </div>
        <div className="button" onClick={() => handleNumberInput(8)}>
          8
        </div>
        <div className="button" onClick={() => handleNumberInput(9)}>
          9
        </div>
        <div className="button l">x</div>
      </div>
      <div className="calc-button-row">
        <div className="button" onClick={() => handleNumberInput(4)}>
          4
        </div>
        <div className="button" onClick={() => handleNumberInput(5)}>
          5
        </div>
        <div className="button" onClick={() => handleNumberInput(6)}>
          6
        </div>
        <div className="button l">−</div>
      </div>
      <div className="calc-button-row">
        <div className="button" onClick={() => handleNumberInput(1)}>
          1
        </div>
        <div className="button" onClick={() => handleNumberInput(2)}>
          2
        </div>
        <div className="button" onClick={() => handleNumberInput(3)}>
          3
        </div>
        <div className="button l">+</div>
      </div>
      <div className="calc-button-row">
        <div className="button">.</div>
        <div className="button" onClick={() => handleNumberInput(0)}>
          0
        </div>
        <div className="button" style={{ padding: "20px 0 20px 0" }}>
          Ans
        </div>
        <div className="button l">=</div>
      </div>
    </section>
  );
};

export default App;

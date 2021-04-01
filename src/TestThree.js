import React from "react";
import sheetData from "./testThree.json";
import { Link } from "react-router-dom";

function TestThree() {
  return (
    <div className="App container">
      <p>
        Go back <Link to="/">Home</Link>
      </p>
      {sheetData.map((item) => (
        <div>
          <p className="que" key={item.queId}>
            {item.question}
          </p>
          <ol>
            <li>{item.optOne}</li>
            <li>{item.optTwo}</li>
            {!item.optThree ? "" : <li>{item.optThree}</li>}
            {!item.optFour ? "" : <li>{item.optFour}</li>}
          </ol>
          <p className="ans">
            <span>Correct answer: </span>
            {item.answer}
          </p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default TestThree;

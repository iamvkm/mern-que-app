import "./App.css";
import sheetData from "./data/testThree.json";

import { Switch, Route, Link } from "react-router-dom";

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

function TestFour() {
  return (
    <div className="App container">
      <h3>Test Four - Coming Soon!</h3>
      <p>
        To access test three <Link to="/three">click here</Link>
      </p>
    </div>
  );
}

function App() {
  return (
    <>
      <Switch>
        <Route path="/three">
          <TestThree />
        </Route>
        <Route path="/">
          <TestFour />
        </Route>
      </Switch>
    </>
  );
}

export default App;

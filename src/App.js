import "./App.css";

import TestThree from "./components/TestThree";
import TestFour from "./components/TestFour";

import { Switch, Route } from "react-router-dom";

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

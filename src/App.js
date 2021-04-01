import "./App.css";
import TestThree from "./TestThree";
import TestFour from "./TestFour";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<TestFour />} />
        <Route path="/three" element={<TestThree />} />
      </Routes>
    </>
  );
}

export default App;

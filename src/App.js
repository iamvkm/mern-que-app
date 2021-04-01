import "./App.css";
import TestThree from "./TestThree";
import TestFour from "./TestFour";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/three" element={<TestThree />} />
        <Route path="/home" element={<TestFour />} />
        <Route path="/" element={<TestFour />} />
      </Routes>
    </>
  );
}

export default App;

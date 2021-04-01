import React from "react";
import { Link } from "react-router-dom";

function TestFour() {
  return (
    <div className="App container">
      <h3>Test Four - Coming Soon!</h3>
      <p>
        To access test three{" "}
        <Link as={Link} to="/three">
          click here
        </Link>
      </p>
    </div>
  );
}

export default TestFour;

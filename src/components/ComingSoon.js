import { Link } from "react-router-dom";

function TestFour() {
  return (
    <div className="App container">
      <br />
      <h3>Test Four - Coming Soon!</h3>
      <p>
        To access test three <Link to="/three">click here</Link>
      </p>
    </div>
  );
}

export default TestFour;

import "./App.css";
import sheetData from "./questions.json";

function App() {
  return (
    <>
      <div className="App container">
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
    </>
  );
}

export default App;

import { useState } from "react";
import data from "./data";
import Person from "./Person";

const App = () => {
  const [people, setPeople] = useState(data);

  const clearList = () => {
    setPeople([]);
  };

  const resetList = () => {
    setPeople(data);
  };
  return (
    <div>
      <h1>{people.length} Birthdays today</h1>
      <Person people={people} />
      {people.length === 0 ? (
        <button className="btn" onClick={resetList}>
          Reset List
        </button>
      ) : (
        <button className="btn" onClick={clearList}>
          Clear List
        </button>
      )}
    </div>
  );
};
export default App;

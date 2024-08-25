import { useState } from "react";
import data from "./data";
import Person from "./Person";
import List from "./List";

const App = () => {
  const [people, setPeople] = useState(data);

  const clearList = () => {
    setPeople([]);
  };

  const resetList = () => {
    setPeople(data);
  };
  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthdays today</h3>
        <List people={people} />

        {people.length === 0 ? (
          <button
            type="button"
            className="btn btn-block"
            onClick={() => setPeople(data)}
          >
            show people
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-block"
            onClick={() => setPeople([])}
          >
            clear list
          </button>
        )}
      </section>
    </main>
  );
};
export default App;

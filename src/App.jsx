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
      </section>
    </main>
  );
};
export default App;

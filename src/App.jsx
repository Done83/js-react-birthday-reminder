import { useState } from "react";
import data from "./data";
import Person from "./Person";

const App = () => {
  const [people, setPeople] = useState(data);
  return (
    <div>
      <h1>{people.length} Birthdays today</h1>
      <Person people={people} />
    </div>
  );
};
export default App;

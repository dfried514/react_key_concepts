import { useState } from "react";

import Count from "./components/Count";
import Changer from "./components/Changer";

const App = () => {
  const [count, setCount] = useState(0);

  const decrement = () => setCount(count - 1);
  const increment = () => setCount(count + 1);
  
  return (
    <div>
      <Count count = {count} />
      <Changer action = "Decrement" changeHandler = {decrement} />
      <Changer action = "Increment" changeHandler = {increment} />
    </div>
  );
  }

export default App;

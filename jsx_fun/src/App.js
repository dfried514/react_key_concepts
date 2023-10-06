import {Welcome, Hero as Dave} from "./components/Welcome";
import Farewell from "./components/Farewell";
import Sample from "./components/Sample";

function App() {

  const goals = [
    "Get better at JavaScript",
    "Become a bad ass at React.js",
    "Learn Full-Stack Development"
  ];

  const index = 1;

  return (
    index === 1 &&
      <>
        <h1>My Goals For This Class:</h1>
        <p>{goals[index]}</p>
        <p>{goals[2]}</p>  
        <Welcome />
        <Dave />
        <Farewell />
        <Sample />
      </>
  );
}

export default App;

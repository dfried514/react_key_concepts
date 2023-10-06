import List from "./components/List";

const App = () => {
  const food = ["spaghetti", "chicken", "hamburger", "salmon", "tacos"];
  return (
    <div>
      <h1>Hello, people!!!</h1>
      { food.length >= 5 &&
        <div>
          <h2>Food</h2>
          <List list = {food} />
        </div>
      }
    </div>
  );
}

export default App;

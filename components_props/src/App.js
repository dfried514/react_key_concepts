import Welcome from './components/Welcome';
import Farewell from './components/Farewell';

function App() {
  return (
    <div>
      <Welcome obj={{"name" : "David", "age" : "54"}}>
        <p>Here we are!!!</p>  
      </Welcome>
    </div>
  );
}

export default App;

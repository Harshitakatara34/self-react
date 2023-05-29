import logo from './logo.svg';
import './App.css';
import { Todo } from './Components/Todos';
import Counter from './Components/Counter';
function App() {
  return (
    <div className="App">
   <Counter/>
   <Todo/>
    </div>
  );
}

export default App;

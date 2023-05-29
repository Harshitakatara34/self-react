import logo from './logo.svg';
import './App.css';
import { TodoApp } from './Component/TodoApp';
import { Counter } from './Component/Counter';

function App() {
  return (
    <div className="App">
      <Counter/>
      <TodoApp/>
    </div>
  );
}

export default App;

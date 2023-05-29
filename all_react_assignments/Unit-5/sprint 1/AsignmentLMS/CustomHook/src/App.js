import logo from './logo.svg';
import './App.css';
import Counter from './Component/Counter';
import Countercustomhook from './Component/Countercustomhook';
import Timer1 from './Component/Timer1';
import Timer2 from './Component/Timer2';
import ClickMe from './Component/ClickMe';
import Throttle from './Component/Throttle';
import Form from './Component/Form';

function App() {
  return (
    <div className="App">
    {/* <h1>Customs with useState</h1>
    <Counter/> */}
{/* <h1>Custom Hook useCounter</h1>
<Countercustomhook/> */}

 {/* <h1>Timer useState</h1>
<Timer1/>
<h1>Timer Custom hook</h1>
<Timer2/> */}
<h1>Custom Hook</h1>
{/* <ClickMe/>
<br></br>

<Throttle/> */}

<Form/>
    </div>
  );
}

export default App;

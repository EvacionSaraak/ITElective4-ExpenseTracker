// import logo from './logo.svg';
import './App.css';
import Expense from './components/Expense.js';
function App() {
  return (
    <div className="App">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Expense/>
      </div>
    </div>
  );
}

export default App;

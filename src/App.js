import logo from './logo.svg';
import './App.css';
import ClassComp from './Day_1/ClassComp';
import FunComp from './Day_1/FunComp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        */}
      <h1>Welcome to React World</h1>
      <ClassComp/>
      <FunComp/>
      </header>
    </div>
  );
}

export default App;

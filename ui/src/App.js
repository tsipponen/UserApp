import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div className="App">
      <header className="App-header">
      <form className="credInputContainer1">
      <span className="credInputContainer">
      <p className="credTitle">Username</p>
      <input className="credInput" type="text" id="username"/>
      </span>
      <span className="credInputContainer">
      <p className="credTitle">Password</p>
      <input className="credInput" type="text" id="password"/>
      </span>
      </form>
        <img src={logo} className="App-logo" alt="logo" />
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
      </header>
    </div>
  );
}

export default App;

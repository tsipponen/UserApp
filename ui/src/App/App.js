import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
      <div className="App">
      <header className="App-header">
      <h2>Welcome, {props.name}!</h2>
      <form className="credInputContainer">
      <span>
      <p className="credTitle">Username</p>
      <input className="credInput" type="text" id="username"/>
      </span>
      <span>
      <p className="credTitle">Password</p>
      <input className="credInput" type="text" id="password"/>
      </span>
      <span>
      <p className="credTitle">Database</p>
      <input className="credInput" type="text" id="database"/>
      </span>
      </form>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;

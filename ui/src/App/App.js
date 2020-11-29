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
      <CredInput id="username"/>
      </span>
      <span>
      <p className="credTitle">Password</p>
      <CredInput id="password"/>
      </span>
      <span>
      <p className="credTitle">Database</p>
      <CredInput id="database"/>
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

function CredInput(props){
  return(
      <input className="CredInput" type="text" id={props.id}/>
  );
}

export default App;

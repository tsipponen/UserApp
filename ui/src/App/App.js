import logo from './logo.svg';
import './styles.css';
import CredInput from './CredInput.js'

function sayLol(){
  console.log("lol");
}

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
      <form className="buttonContainer">
      <button className="submit" onClick={sayLol}>Connect</button>
      </form>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;

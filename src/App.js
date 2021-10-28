import logo from './logo.gif';
import './App.css';
import Greet from './components/Greet';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> s n a i l </h1>
        <p><Button/></p>
        <hr/>
        <p id="greet">
            <Greet name="Snail"/>
            <Greet name="snail"/>
        </p>
        <img src="https://i.gifer.com/7dTK.gif" className="App-gif" alt="snel gif"></img>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Snail
        </a>
      </header>
      <img id="smol" src="https://i.pinimg.com/originals/a6/06/21/a60621da98a79bfbdc0e3dd5524a32d3.gif" alt="smol snel"></img>
    </div>
  );
}

export default App;

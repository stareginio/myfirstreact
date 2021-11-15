import logo from './logo.gif';
import './App.css';

import Button from './components/Button';
import Employee from './components/Employee';
import Greet from './components/Greet';
import Hello from './components/Hello';

// functional component = stateless component
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1> s n a i l </h1>

        <p id="hello"> {Hello()} </p>

        <Button />

        <hr />

        <div id="greet">
          <Greet name="Snail Sr." />
          <Greet name="Snail Jr." />
        </div>

        <hr />

        <Employee />

        <img src="https://i.gifer.com/7dTK.gif"
          className="App-gif"
          alt="snel gif">
        </img>

        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=Tt7bzxurJ1I"
          target="_blank"
          rel="noopener noreferrer"
        >
          here's a cute dancing stick bug video
        </a>

      </header>
      <img id="smol"
        src="https://i.pinimg.com/originals/a6/06/21/a60621da98a79bfbdc0e3dd5524a32d3.gif"
        alt="smol snel">
      </img>
    </div>
  );
}

export default App;

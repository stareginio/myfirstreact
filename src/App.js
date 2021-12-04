import './styles/App.css'

import Hello from './components/Hello';
import Logo from './components/Logo';
import Router from './components/Router';
import Nav from './components/Nav';

// functional component = stateless component
function App() {
  return (
    <div >
      <Nav />
      <div className="App">
        <Logo />
        <p id="hello"> {Hello()} </p>
        <Router />
      </div>
    </div>
  );
}

export default App;

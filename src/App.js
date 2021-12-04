import Home from './components/Home';
import Nav from './components/Nav';

// functional component = stateless component
function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
    </div>
  );
}

export default App;

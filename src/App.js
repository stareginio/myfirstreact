import Router from './components/Router';
import Nav from './components/Nav';

// functional component = stateless component
function App() {
  return (
    <div className="App">
      <Nav />
      <Router />
    </div>
  );
}

export default App;

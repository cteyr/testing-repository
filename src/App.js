import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import ParentComponent from './ParentComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Learn React</h1>
        <Counter/>
        <ParentComponent/>
      </header>
    </div>
  );
}

export default App;

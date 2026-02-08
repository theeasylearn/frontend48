import logo from './logo.svg';
import './App.css';

//functional components (always return JSX)
function App() {
  //JSX
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          THE EASYLEARN ACADEMY
        </h2>
        <p>Trainer :- Ankit Patel</p>
      </header>
    </div>
  );
}

export default App;

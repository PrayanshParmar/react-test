import logo from './logo.svg';
import './App.css';

const environmentVariables = process.env;

// Log all environment variables
console.log("Environment variables:");
for (const key in environmentVariables) {
  if (Object.hasOwnProperty.call(environmentVariables, key)) {
    console.log(`${key}: ${environmentVariables[key]}`);
  }
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

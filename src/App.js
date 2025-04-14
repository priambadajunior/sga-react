import logo from './logo.svg';
import EmployeeList from './EmployeeList'; // Importing EmployeeList

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* Call EmployeeList here */}
        <EmployeeList />
      </header>
    </div>
  );
}

export default App;
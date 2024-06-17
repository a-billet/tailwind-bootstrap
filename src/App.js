import "./App.css";
import Sidebar from "./components/Sidebar.tsx";
import TopBar from "./components/TopBar.tsx";
import logo from "./logo.svg";

function App() {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="App w-full">
        <TopBar />
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
    </div>
  );
}

export default App;

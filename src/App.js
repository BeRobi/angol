import logo from "./logo.svg";
import "./App.css";
import Kivalaszto from "./view_component/Kivalaszto";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Angol nyelvtan varázsló</h1>
      </header>
      <article>
        <Kivalaszto />
      </article>
    </div>
  );
}

export default App;

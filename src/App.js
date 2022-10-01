import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Main = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload. <br />
        Click <Link to="/example">here</Link> to see another route
      </p>
    </header>
  </div>
);

const Example = () => <div>This is an example</div>;

function App() {
  return (
    <Router basename={`${process.env.PUBLIC_URL}`}>
      <Routes>
        <Route path="/example" element={<Example />} />
        <Route path="*" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;

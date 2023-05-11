import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainRoute from "./components/routes/MainRoute";
import Currency from "./components/routes/Currency";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact Component={(props) => <MainRoute />} />
          <Route
            path="/currency/:id"
            exact
            Component={(props) => <Currency />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

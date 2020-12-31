import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact={true}>
            <Header />
            <Home />
          </Route>
          <Route path="/checkout">
            <Header />
            <h1>I am a checkout page</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

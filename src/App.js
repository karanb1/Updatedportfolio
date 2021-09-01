import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import About from "./Screens/About/About";
import Home from "./Screens/Home/Home";
import Photography from "./Screens/Photography/Photography";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/photography" component={Photography} />
      </Switch>
    </Router>
  );
}

export default App;

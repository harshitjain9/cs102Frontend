import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header/Header";

function App() {
  return (
    <Router>
      <Header />
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header/Header";
import VesselSchedules from "./VesselSchedules/VesselSchedules";

function App() {
  return (
    <Router>
      <Header />
      <VesselSchedules />
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header/Header";
import VesselSchedules from "./VesselSchedules/VesselSchedules";
import AlertsConfigured from "./AlertsConfigured/AlertsConfigured";
import AlertsTriggered from "./AlertsTriggered/AlertsTriggered";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
            <Route path='/' exact component={VesselSchedules} />
            <Route path='/alertsConfigured' component={AlertsConfigured} />
            <Route path="/alertsTriggered" component={AlertsTriggered} />
          </Switch>
    </Router>
  );
}

export default App;

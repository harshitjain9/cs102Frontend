import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import VesselSchedules from "./VesselSchedules/VesselSchedules";
import AlertsConfigured from "./AlertsConfigured/AlertsConfigured";
import AlertsTriggered from "./AlertsTriggered/AlertsTriggered";
import Login from "./LoginPage/Login";
import WebServicesSettings from "./WebServicesSettings/WebServicesSettings";
import EmailSettings from "./EmailSettings/EmailSettings"
function App() {
  return (
    <Router>
      <Header/>
      <Switch>
            <Route path='/vesselSchedules' exact component={VesselSchedules} />
            <Route path='/alertsConfigured' component={AlertsConfigured} />
            <Route path="/alertsTriggered" component={AlertsTriggered} />
            <Route path="/Login" component = {Login}/>
            <Route path = "/WebServicesSettings" component = {WebServicesSettings}/>
            <Route path = "/" component = {EmailSettings}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;

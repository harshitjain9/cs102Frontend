import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import VesselSchedules from "./VesselSchedules/VesselSchedules";
import AlertsConfigured from "./AlertsConfigured/AlertsConfigured";
import AlertsTriggered from "./AlertsTriggered/AlertsTriggered";
import Login from "./LoginPage/Login";
import Registration from "./Registration/Registration";
import ForgotPassword from "./ForgotPassword/forgotPassword.jsx";
import WebServicesSettings from "./WebServicesSettings/WebServicesSettings";
import EmailSettings from "./EmailSettings/EmailSettings";
import SingleVessel from "./SingleVessel/SingleVessel";
import Dashboard from "./LoginModal/Loginmodal";


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/vesselSchedules' exact component={VesselSchedules} />
        <Route path='/vesselSchedules/:fullVslM/:inVoyN' component={SingleVessel} />
        <Route path='/alertsConfigured' component={AlertsConfigured} />
        <Route path="/alertsTriggered" component={AlertsTriggered} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Login} />
        <Route path="/webServicesSettings" component={WebServicesSettings} />
        <Route path="/ForgotPassword" component={ForgotPassword} />
        <Route path="/createAccount" component={Registration} />
        {/* <Route path="/" exact component={VesselSchedules} /> */}
        <Route path="/SingleVessel" exact component={SingleVessel} />
        <Route path="/" exact component={Dashboard} />


      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

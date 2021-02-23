import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Catalog from "./Components/Catalog";
import Details from "./Components/Details";
import Home from "./Components/Home.jsx";
import Development from "./Components/Delevopment";
import Base from "./Components/Base";
import Scheduler from "./Components/Scheduler";
import BaseTable from "./Components/BaseTable";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/catalog" component={Catalog} />
      <Route path="/details" component={Details} />
      <Route path="/development" component={Development} />
      <Route path="/base" component={Base} />
      <Route path="/scheduler" component={Scheduler} />
      <Route path="/basetable" component={BaseTable} />
    </Router>
  );
};

export default App;

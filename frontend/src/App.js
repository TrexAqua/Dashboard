import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Catalog from "./Components/Catalog";
import Details from "./Components/Details";
import Home from "./Components/Home.jsx";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/catalog" component={Catalog} />
      <Route path="/details" component={Details} />
    </Router>
  );
};

export default App;

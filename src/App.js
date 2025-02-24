import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import Staff from "./components/pages/Staff";
import PromotionRewards from "./components/pages/PromotionRewards";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/staff" component={Staff} />
          <Route path="/promotions" component={PromotionRewards} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

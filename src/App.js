import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import "./index.css";
import "./smartphones.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
// import 'animate.css/animate.css'
import "animate.css/animate.min.css";
AOS.init();
class App extends Component {

  render() {
    return (
        <Router>
        <Navigation/>
        <Switch>
          <Route path="/" exact component={Home}/>
        </Switch>
        <Footer/>
        </Router>
    );
  }
}

export default App;

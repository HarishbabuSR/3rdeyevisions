import React from "react"
import './App.css';
import About from "./components/about/About";
import ContactUs from "./components/contactUs/ContactUs";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Services from "./components/services/Services";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Services" component={Services} />
          <Route exact path="/About" component={About}/>
          <Route exact path="/ContactUs" component={ContactUs}/>
        </Switch>
          
      </Router>
    </React.Fragment>
  );
}

export default App;

import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import MainApp from './components/mainApp/MainApp';
import LandingPage from "./components/landingPage/LandingPage";
import About from './components/about/About';
import "./index.css";

function App() {

  return (
    <Router>
        <div className="app">
        <nav className="App-header">
            <h1>Parent Helper</h1>
            <ul>
                <li>
                <Link to="/login">Login</Link>
                </li>
                <li>
                <Link to="/">Tracker</Link>
                </li>
                <li>
                <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
        <Switch>
        <Route exact path='/login'>
            <LandingPage />
        </Route>
        <Route exact path='/'>
            <MainApp />
        </Route>
        <Route exact path='/about'>
            <About />
        </Route>
        </Switch>
        </div>
    </Router>
  );
}

export default App;

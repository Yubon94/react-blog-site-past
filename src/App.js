import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./styles/style.scss";
import { Home } from "./components/Home.jsx";
import { Profile } from "./components/Profile.jsx";
import { Works } from "./components/Works.jsx";
import { Social } from "./components/Social.jsx";

export const App = () => {
  return (
    <Router>
      <div id="container">
        {/* menu area */}
        <nav id="menu-area">
          <div className="icon">
            <Link to="/">Home</Link>
          </div>
          <ul className="menu-box">
            <li className="menu-item">
              <Link to="/profile">Profile</Link>
            </li>
            <li className="menu-item">
              <Link to="/works">Works</Link>
            </li>
            <li className="menu-item">
              <Link to="/social">Social</Link>
            </li>
          </ul>
        </nav>
        {/* {content area} */}
        <section id="content-area">
          <Switch>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/works">
              <Works />
            </Route>
            <Route path="/social">
              <Social />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </section>
      </div>
    </Router>
  );
};

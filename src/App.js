import React from "react";
import "./styles/style.scss";
import { Profile } from "./components/Profile.jsx";
import { Works } from "./components/Works.jsx";
import { Social } from "./components/Social.jsx";

export const App = () => {
  return (
    <>
      <div id="container">
        {/* menu area */}
        <section id="menu-area">
          <div className="icon">icon</div>
          <div className="menu-box">
            <span className="menu-item">Profile</span>
            <span className="menu-item">Works</span>
            <span className="menu-item">Social</span>
          </div>
        </section>
        <section id="landing-area">
            <div className="landing-title">Welcome to My Page</div>
        </section>
        {/* {content area} */}
        <section id="content-area">
          <Profile />
          <Works />
          <Social />
        </section>
      </div>
    </>
  );
};

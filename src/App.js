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
        <div id="menu-area">
          <div className="icon">icon</div>
          <div className="menu-box">
            <span className="menu-item">Profile</span>
            <span className="menu-item">Works</span>
            <span className="menu-item">Social</span>
          </div>
        </div>
        <div id="landing-area">
            <span>Landing</span>
        </div>
        {/* {content area} */}
        <div id="content-area">
          <Profile />
          <Works />
          <Social />
        </div>
      </div>
    </>
  );
};

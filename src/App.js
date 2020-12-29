import React from "react";
import "./styles/style.scss";
import Icon from "./images/blue.jpg";
import { Profile } from "./components/Profile.jsx";
import { Works } from "./components/Works.jsx";
import { Social } from "./components/Social.jsx";

export const App = () => {
  return(
    <>
      <div id="container">
        {/* menu area */}
        <div id="menu-area">
          <div className="icon">icon</div>
          <div className="menu-box">
            <div className="menu-item">Profile</div>
            <div className="menu-item">Works</div>
            <div className="menu-item">Social</div>
          </div>
        </div>
        <div className="imageSample">
          <img src={Icon} />
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

import React from "react";
import "./style.scss";
import Icon from "./images/sample.png";

export default function App() {
  return (
    <div className="App">
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
        <div>
          <img src={Icon} />
        </div>
        {/* {content area} */}
        <div id="content-area">
          <div className="content-box">
            <div className="content-title">Profile</div>
            <div className="content">This is Profile area</div>
          </div>
          <div className="content-box">
            <div className="content-title">Works</div>
            <div className="content">This is Works area</div>
          </div>
          <div className="content-box">
            <div className="content-title">Works</div>
            <div className="content">This is Social area</div>
          </div>
        </div>
      </div>
    </div>
  );
}

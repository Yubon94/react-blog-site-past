import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div id="container">
        {/* menu area */}
        <div id="menu-box">
          <div className="menu-item">
            Profile
          </div>
          <div className="menu-item">
            Works
          </div>
          <div className="menu-item">
            Social
          </div>
        </div>
        {/* {content area} */}
        <div className="content">
          <h1>content</h1>
          <h2></h2>
        </div>
      </div>
    </div>
  );
}

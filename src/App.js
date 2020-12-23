import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div id="container">
        {/* menu area */}
        <div className="menu-box">
          <div className="icon">icon</div>
          <nav className="menu"></nav>
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

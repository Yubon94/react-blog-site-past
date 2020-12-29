import React from "react";

export const Profile = () => {
  return (
    <>
      <div className="content">
        <div className="content-title">Profile</div>
        <div className="item-box">
          <div className="item">
            <div className="item-title">About Me</div>
            <div className="item-description">This is introduction of me.</div>
          </div>
          <div className="item">
            <div className="item-title">Career</div>
            <div className="item-description">This is my career.</div>
          </div>
          <div className="item">
            <div className="item-title">Tech Stack</div>
            <div className="item-description">This is my tech stack.</div>
          </div>
        </div>
      </div>
    </>
  );
};

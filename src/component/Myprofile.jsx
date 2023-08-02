import React from "react";
import "./Myprofile.css";

function Myprofile() {
  return (
    <div className="app-container">
      <div className="app-introduct-name">
        <div className="fisrt-text">Hi!</div>

        <div className="app-content">
          <div>
            <h1 className="name-text">
              I'm Nitipath Chuejuntuk.
              <br />a Frontend developer.
            </h1>
          </div>
          <div>
            <p className="desccirption-text">
              Frontend developer based in tehran, Iran.
              <br /> I am coding with a clean and beautiful problem
              <br /> solving in mind.
            </p>
          </div>

          <div className="app-follow-me">
            <p>Follow me</p>
            <div className="app-icon-follow">
              <p>😀</p>
              <p>👾</p>
              <p>🚩</p>
              <p>📝</p>
            </div>
          </div>
        </div>

        <div>
          <h1>Im Nitipath Chuejuntuk a Frontend developer.</h1>
        </div>
      </div>
      <div className="app-myprofile-picture">
        <img className="app-profile-logo" src="/images/img-profile-01.jpg" />
      </div>
    </div>
  );
}

export default Myprofile;

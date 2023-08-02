import React from "react";
import "./MainContent.css";
import icon1 from "../assets/images/content-1.svg";
import icon2 from "../assets/images/content-2.svg";
import icon3 from "../assets/images/content-3.svg";
import icon4 from "../assets/images/content-4.svg";

function MainContent() {
  return (
    <div className="main-container">
      <h1>Why Hire Me?</h1>
      <div className="content-container">
        <div className="content-box1">
          <div className="content-icon1">
            <img src={icon1} />
          </div>
          <div className="content-subject1">
            <h2>Communicative</h2>
          </div>
          <div className="content-description1">
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.{" "}
            </p>
          </div>
        </div>
        <div className="content-box2">
          <div className="content-icon2">
            <img src={icon2} />
          </div>
          <div className="content-subject2">
            <h2>Professional</h2>
          </div>
          <div className="content-description2">
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.{" "}
            </p>
          </div>
        </div>
        <div className="content-box3">
          <div className="content-icon3">
            <img src={icon3} />
          </div>
          <div className="content-subject3">
            <h2>Collaborative​</h2>
          </div>
          <div className="content-description3">
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.{" "}
            </p>
          </div>
        </div>
        <div className="content-box4">
          <div className="content-icon4">
            <img src={icon4} />
          </div>
          <div className="content-subject4">
            <h2>Client’s Favourite</h2>
          </div>
          <div className="content-description4">
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;

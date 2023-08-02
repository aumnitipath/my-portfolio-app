import React from "react";
import "./Myprofile.css";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { BsTelegram } from "react-icons/bs";
import bulletpoint from "../assets/images/Bullet Points.svg";
import myprofilepic from "../assets/images/img-profile-01.jpg";

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

          <div className="follow">
            <span>Follow me</span>
            <a href="" className={"facebook"}>
              <FaFacebook />
            </a>

            <a href="" className={"Twitter"}>
              <AiFillTwitterCircle />
            </a>

            <a href="" className={"instagram"}>
              <BiLogoInstagramAlt />
            </a>

            <a href="" className={"telegram"}>
              <BsTelegram />
            </a>
          </div>
          <div className="app-header-botton">
            <button className="header-btn1">Send Request</button>
            <button className="header-btn2">Download CV</button>
          </div>
        </div>
      </div>
      <div className="app-myprofile-picture">
        <img className="app-profile-logo" src={myprofilepic} />

        <img className="app-profile-dot1" src={bulletpoint} />
      </div>
      <img className="app-profile-dot2" src={bulletpoint} />
    </div>
  );
}

export default Myprofile;

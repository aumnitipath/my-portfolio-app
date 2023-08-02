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
        <div className="content-box">
          <div className="content-icon">
            <img src={icon1} />
          </div>
          <div className="content-subject">
            <h2>Communicative</h2>
          </div>
          <div className="content-description">
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.{" "}
            </p>
          </div>
        </div>
        <div className="content-box">
          <div className="content-icon">
            <img src={icon2} />
          </div>
          <div className="content-subject">
            <h2>Professional</h2>
          </div>
          <div className="content-description">
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.{" "}
            </p>
          </div>
        </div>
        <div className="content-box">
          <div className="content-icon">
            <img src={icon3} />
          </div>
          <div className="content-subject">
            <h2>Collaborative​</h2>
          </div>
          <div className="content-description">
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.{" "}
            </p>
          </div>
        </div>
        <div className="content-box">
          <div className="content-icon">
            <img src={icon4} />
          </div>
          <div className="content-subject">
            <h2>Client’s Favourite</h2>
          </div>
          <div className="content-description">
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

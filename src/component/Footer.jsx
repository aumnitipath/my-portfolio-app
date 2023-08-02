import "./Footer.css";
import { BiLogoInstagramAlt, BiLogoTelegram } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-email">
        <a className="AiOutlineMail">
          <MdEmail className="icon-email" />
        </a>
        <span>aumnitipath@outlook.com</span>
      </div>
      <div className="footer-copyright">
        <h4>© Copyright 2021 | mmrz315</h4>
      </div>
      <div className="footer-logo">
        <a href="">
          <BiLogoInstagramAlt className="icon" />
        </a>
        <a href="">
          <BiLogoTelegram className="icon" />
        </a>
      </div>
    </div>
  );
}

export default Footer;

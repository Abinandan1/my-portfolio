import { Wrapper } from "../styles/Footer";
import { FaRegCopyright } from "react-icons/fa";
const Footer = () => {
  return (
    <Wrapper id="contact">
      <div className="section-center">
        <div className="footer-container">
          <div className="footer-info">
            <h2>Abinandan</h2>
            <p>frontend developer</p>
            <div className="footer-links">
              <a href="#hero">home</a>
              <a href="#about">about</a>
              <a href="#skills">skills</a>
              <a href="#projects">projects</a>
            </div>
          </div>
          <div className="footer-contact">
            <h2>contact</h2>
            <form className="form">
              <input
                className="form-input"
                type="text"
                name="name"
                placeholder="enter your name"
              />
              <input
                className="form-input"
                type="text"
                name="email"
                placeholder="enter your email"
              />
              <textarea
                className="form-input form-textarea"
                name="description"
                id=""
                cols="30"
                rows="10"
                placeholder="enter your message"
              ></textarea>
              <button type="submit" className="btn">
                submit
              </button>
            </form>
          </div>
        </div>
        <p className="copyright-info">
          <FaRegCopyright />
          Copyright 2024. Created by Abinandan.
        </p>
      </div>
    </Wrapper>
  );
};
export default Footer;

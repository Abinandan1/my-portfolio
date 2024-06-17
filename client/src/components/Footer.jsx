import { Wrapper } from "../styles/Footer";
import { FaRegCopyright } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";
import SectionTitle from "./SectionTitle";
const Footer = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const message = {
      to: "abinandan2018@gmail.com",
      subject: "Contact Us - Portfolio",
      text: "",
      html: `
        <div><div style="background:#d1fae5; border-radius:0.5rem;padding:1.5rem 1rem;">
          <div style="max-width: "80vw";
  margin: 0 auto;
  text-align: center;
  padding: 4rem 1rem">
            <h2 style="display: inline-block;
  font-size: clamp(1.25rem,5vw,1.75rem);
  padding: 0 0.5rem;
  border-radius: 0.6rem;
  border-left: 8px solid #10b981;
  border-right: 8px solid #10b981;
  margin-top: 0;
  margin-bottom: 1rem;">Message from ${data.name}</h2>
            <div style="background: #10b981;color:#ffffff;padding:0.5rem 1rem; border-radius:0.5rem;"><h3 style="margin-top:0;margin-bottom:0;letter-spacing:2px;">EMAIL</h3><p style="color:#ffffff;text-decoration:none;margin-top:0;margin-bottom:1rem;">${data.email}</p><h3 style="margin-top:0;margin-bottom:0;letter-spacing:2px;">DESCRIPTION</h3><p style="margin-top:0;margin-bottom:1rem;">${data.description}</p><p style="margin:0;">Thanks & Regards,</p><p style="margin-top:0;">${data.name}</p></div>
          </div>
        </div>
        </div>
      `,
    };
    try {
      const response = await axios.post("/api/v1/contact", message);
      toast.success(response.data.msg);
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      console.log(error?.response?.data?.msg);
    }
  };
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
            <form onSubmit={handleSubmit} className="form">
              <input
                className="form-input"
                type="text"
                name="name"
                placeholder="name"
                required
              />
              <input
                className="form-input"
                type="text"
                name="email"
                placeholder="email"
                required
              />
              <textarea
                className="form-input form-textarea"
                name="description"
                id=""
                cols="30"
                rows="10"
                placeholder="message"
                required
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

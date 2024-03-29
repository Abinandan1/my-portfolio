import { Wrapper } from "../styles/About";
import education from "../assets/education.svg";
import { GiGraduateCap } from "react-icons/gi";
import { MdLocationPin } from "react-icons/md";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <Wrapper id="about">
      <div className="section-center">
        <SectionTitle text="about me" />
        <p>
          I'm a Frontend Web Developer passionate about building front-end web
          applications using technologies like HTML, CSS, JavaScript and React.
          Do check out some of my work in the projects section.
        </p>
        <div className="education">
          <img src={education} alt="" />
          <p>education</p>
          <div className="education-details">
            <div>
              <GiGraduateCap className="icon" />
              B.E Electronics & Communication Engineering
            </div>
            <div>
              <MdLocationPin className="icon" />
              Vellore Institute of Technology, Chennai
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default About;

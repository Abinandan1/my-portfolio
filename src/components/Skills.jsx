import { Wrapper } from "../styles/Skills";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import js from "../assets/js.svg";
import react from "../assets/react.svg";
import tailwind_css from "../assets/tailwind_css.svg";
import SectionTitle from "./SectionTitle";
const Skills = () => {
  return (
    <Wrapper id="skills">
      <div className="section-center">
        <SectionTitle text="my skills" />
        <div className="skills-container">
          <div className="skill">
            <div className="img-container">
              <img src={html} alt="" />
            </div>
            <p>HTML</p>
          </div>
          <div className="skill">
            <div className="img-container">
              <img src={css} alt="" />
            </div>
            <p>CSS</p>
          </div>
          <div className="skill">
            <div className="img-container">
              <img src={js} alt="" />
            </div>
            <p>JavaScript</p>
          </div>
          <div className="skill">
            <div className="img-container">
              <img src={react} alt="" />
            </div>
            <p>React</p>
          </div>
          <div className="skill">
            <div className="img-container">
              <img src={tailwind_css} alt="" />
            </div>
            <p>tailwind css</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Skills;

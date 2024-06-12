import { Wrapper } from "../styles/Projects";
import SectionTitle from "./SectionTitle";
import { IoMdGlobe } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import project1 from "../assets/project-1.png";
import project2 from "../assets/project-2.png";
import project3 from "../assets/project-3.png";
const Projects = () => {
  return (
    <Wrapper id="projects">
      <div className="section-center">
        <SectionTitle text="projects" />
        <div className="projects-container">
          <div className="project">
            <div className="img-container">
              <img src={project1} alt="" />
            </div>
            <div className="project-btns">
              <a
                href="https://mern-course-jobify-e9pr.onrender.com/"
                className="btn btn-link"
              >
                site link
                <IoMdGlobe className="icon" />
              </a>
              <a
                href="https://github.com/Abinandan1/mern-course-jobify"
                className="btn btn-link"
              >
                github <FaGithub className="icon" />
              </a>
            </div>
          </div>
          <div className="project">
            <div className="img-container">
              <img src={project2} alt="" />
            </div>
            <div className="project-btns">
              <a href="https://notes-v2.onrender.com/" className="btn btn-link">
                site link <IoMdGlobe className="icon" />
              </a>
              <a
                href="https://github.com/Abinandan1/notes_v2"
                className="btn btn-link"
              >
                github <FaGithub className="icon" />
              </a>
            </div>
          </div>
          <div className="project">
            <div className="img-container">
              <img src={project3} alt="" />
            </div>
            <div className="project-btns">
              <a
                href="https://abinandan-mini-projects.netlify.app/"
                className="btn btn-link"
              >
                site link <IoMdGlobe className="icon" />
              </a>
              <a
                href="https://github.com/Abinandan1/mini-projects"
                className="btn btn-link"
              >
                github <FaGithub className="icon" />
              </a>
            </div>
          </div>
          <div className="project">
            <div className="img-container">
              <img src="" alt="" />
            </div>
            <div className="project-btns">
              <a href="" className="btn btn-link">
                site link <IoMdGlobe className="icon" />
              </a>
              <a href="" className="btn btn-link">
                github <FaGithub className="icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Projects;

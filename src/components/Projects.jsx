import { Wrapper } from "../styles/Projects";
import SectionTitle from "./SectionTitle";
import { IoMdGlobe } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
const Projects = () => {
  return (
    <Wrapper id="projects">
      <div className="section-center">
        <SectionTitle text="projects" />
        <div className="projects-container">
          <div className="project">
            <img src="" alt="" />
            <div className="project-btns">
              <a href="" className="btn btn-link btn-hipster">
                site link
                <IoMdGlobe className="icon" />
              </a>
              <a href="" className="btn btn-link btn-hipster">
                github <FaGithub className="icon" />
              </a>
            </div>
          </div>
          <div className="project">
            <img src="" alt="" />
            <div className="project-btns">
              <a href="" className="btn btn-link btn-hipster">
                site link <IoMdGlobe className="icon" />
              </a>
              <a href="" className="btn btn-link btn-hipster">
                github <FaGithub className="icon" />
              </a>
            </div>
          </div>
          <div className="project">
            <img src="" alt="" />
            <div className="project-btns">
              <a href="" className="btn btn-link btn-hipster">
                site link <IoMdGlobe className="icon" />
              </a>
              <a href="" className="btn btn-link btn-hipster">
                github <FaGithub className="icon" />
              </a>
            </div>
          </div>
          <div className="project">
            <img src="" alt="" />
            <div className="project-btns">
              <a href="" className="btn btn-link btn-hipster">
                site link <IoMdGlobe className="icon" />
              </a>
              <a href="" className="btn btn-link btn-hipster">
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

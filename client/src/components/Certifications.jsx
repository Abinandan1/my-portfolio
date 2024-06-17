import { Wrapper } from "../styles/Certifications";
import SectionTitle from "./SectionTitle";
import { FaExternalLinkAlt } from "react-icons/fa";
const Certifications = () => {
  return (
    <Wrapper id="certifications">
      <div className="section-center">
        <SectionTitle text="courses & certifications" />
        <div className="certifications-container">
          <div className="certification">
            <p>HTML & CSS Tutorial and Projects Course</p>
            <a
              href="https://www.udemy.com/certificate/UC-1c88ae73-9442-4c8b-a4f6-ad0c4cc42101"
              target="_blank"
              className="btn"
            >
              credential <FaExternalLinkAlt />
            </a>
          </div>
          <div className="certification">
            <p>JavaScript Tutorial amd Projects Course</p>
            <a
              href="https://www.udemy.com/certificate/UC-0bbe63fb-c30d-4502-b90b-5eafd5fb9f77/"
              target="_blank"
              className="btn"
            >
              credential <FaExternalLinkAlt />
            </a>
          </div>
          <div className="certification">
            <p>React 18 Tutorial and Projects Course</p>
            <a
              href="https://www.udemy.com/certificate/UC-bfbe6761-f8f2-4f6c-a0c8-7a8b2e5d6aa5"
              target="_blank"
              className="btn"
            >
              credential <FaExternalLinkAlt />
            </a>
          </div>
          <div className="certification">
            <p>MERN 2024 Edition - MongoDB, Express, React and NodeJS</p>
            <a
              href="https://www.udemy.com/certificate/UC-252154ba-71d5-4dfe-9e2c-7a51b624531b/"
              target="_blank"
              className="btn"
            >
              credential <FaExternalLinkAlt />
            </a>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Certifications;
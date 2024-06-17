import { Wrapper } from "../styles/SocialMedia";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
const SocialMedia = () => {
  return (
    <Wrapper>
      <div className="social-icons">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/abinandan-a-t-465657211"
        >
          <FaLinkedin className="icon" />
        </a>
        <a target="_blank" href="https://github.com/Abinandan1">
          <FaGithub className="icon" />
        </a>
      </div>
    </Wrapper>
  );
};
export default SocialMedia;

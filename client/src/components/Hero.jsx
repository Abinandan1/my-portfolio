import { Wrapper } from "../styles/Hero";
import ProfilePicture from "./ProfilePicture";
import Resume from "../assets/Resume.pdf";
const Hero = () => {
  return (
    <Wrapper id="hero">
      <div className="section-center">
        <ProfilePicture />
        <h1>Hey, I'm Abinandan</h1>
        <p>
          Web developer. Enjoy working with Web technologies and develop
          attractive, responsive websites.
        </p>

        <a target="_blank" href={Resume} className="btn btn-hipster">
          resume
        </a>
      </div>
    </Wrapper>
  );
};
export default Hero;

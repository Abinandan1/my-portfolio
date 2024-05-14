import { Wrapper } from "../styles/Hero";
import ProfilePicture from "./ProfilePicture";

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

        <button className="btn btn-hipster">resume</button>
      </div>
    </Wrapper>
  );
};
export default Hero;

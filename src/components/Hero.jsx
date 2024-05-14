import { Wrapper } from "../styles/Hero";
import ProfilePicture from "./ProfilePicture";

const Hero = () => {
  return (
    <Wrapper id="hero">
      <div className="section-center">
        <ProfilePicture />
        <h1>Hey, I'm Abinandan</h1>
        <p>
          frontend developer. Enjoy working with Frontend technologies and
          develop attractive, responsive websites.
        </p>

        <button className="btn btn-hipster">download cv</button>
      </div>
    </Wrapper>
  );
};
export default Hero;

import { Wrapper } from "../styles/ProfilePicture";
import mypic from "../assets/mypic.jpeg";
const ProfilePicture = () => {
  return (
    <Wrapper>
      <img src={mypic} alt="" />
    </Wrapper>
  );
};
export default ProfilePicture;

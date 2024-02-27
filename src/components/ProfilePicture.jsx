import { Wrapper } from "../styles/ProfilePicture";
import mypic from "../assets/me.png";
const ProfilePicture = () => {
  return (
    <Wrapper>
      <img src={mypic} alt="" />
    </Wrapper>
  );
};
export default ProfilePicture;

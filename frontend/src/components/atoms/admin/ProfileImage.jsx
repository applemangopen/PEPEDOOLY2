import styled from "styled-components";

const StyledImg = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 20px;
`;

const ProfileImage = ({ onImageChange, user, isEdit }) => (
  <div>
    {user && (
      <StyledImg id="profile-img" class="user-pfp" src={user.Users_profile} />
    )}
    {isEdit && <input type="file" onChange={onImageChange} />}
  </div>
);

export default ProfileImage;

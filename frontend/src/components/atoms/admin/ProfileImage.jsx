import styled from "styled-components";

const StyledImg = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 20px;
`;

const ProfileImage = ({ onImageChange, admin, isEdit }) => (
  <div>
    {admin && (
      <StyledImg id="profile-img" class="user-pfp" src={admin.Admin_profile} />
    )}
    {isEdit && <input type="file" onChange={onImageChange} />}
    {/* <StyledImg src="/assets/cat.jpg" /> */}
  </div>
);

export default ProfileImage;

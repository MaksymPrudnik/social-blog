import {
  DateContainer,
  EmailContainer,
  ProfileImage,
  ProfileImageContainer,
  ProfileInfoContainer,
  UsernameContainer,
} from "./styled";

export const ProfileInfo = ({
  username,
  email,
  picture,
  wallpapper,
  createdAt,
}) => (
  <ProfileInfoContainer>
    <ProfileImageContainer wallpapper={wallpapper}>
      <ProfileImage src={picture} alt="" />
    </ProfileImageContainer>
    <UsernameContainer>@{username}</UsernameContainer>
    <EmailContainer>{email ? email : null}</EmailContainer>
    <DateContainer>Member since {createdAt.split("T")[0]}</DateContainer>
  </ProfileInfoContainer>
);

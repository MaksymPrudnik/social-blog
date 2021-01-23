import {
  DateContainer,
  EmailContainer,
  InfoInNumbersContainer,
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
  friends,
  createdAt,
  postCount,
}) => (
  <ProfileInfoContainer>
    <ProfileImageContainer wallpapper={wallpapper}>
      <ProfileImage src={picture} alt="" />
    </ProfileImageContainer>
    <UsernameContainer>@{username}</UsernameContainer>
    <EmailContainer>{email ? email : null}</EmailContainer>
    <DateContainer>Member since {createdAt.split("T")[0]}</DateContainer>
    <InfoInNumbersContainer>
      <div>{`${postCount} Post${postCount > 1 ? "s" : ""}`}</div>
      <div>{`${friends.length} Friend${friends.length !== 1 ? "s" : ""}`}</div>
    </InfoInNumbersContainer>
  </ProfileInfoContainer>
);

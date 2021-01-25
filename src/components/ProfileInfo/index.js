import {
  DateContainer,
  EmailContainer,
  FriendsCountContainer,
  FriendshipButton,
  InfoInNumbersContainer,
  PostCountContainer,
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
  isMe,
  relationship,
}) => {
  const friendshipData = {
    message: "Loading",
  };
  if (!isMe) {
    switch (relationship) {
      case null:
        friendshipData.message = "Add friend";
        break;
      default:
        break;
    }
  }

  return (
    <ProfileInfoContainer>
      <ProfileImageContainer wallpapper={wallpapper}>
        <ProfileImage src={picture} alt="" />
      </ProfileImageContainer>
      {!isMe ? (
        <FriendshipButton>{friendshipData.message}</FriendshipButton>
      ) : null}
      <UsernameContainer>@{username}</UsernameContainer>
      <EmailContainer>{email ? email : null}</EmailContainer>
      <DateContainer>Member since {createdAt.split("T")[0]}</DateContainer>
      <InfoInNumbersContainer>
        <PostCountContainer>{`${postCount} Post${
          postCount > 1 ? "s" : ""
        }`}</PostCountContainer>
        <FriendsCountContainer>{`${friends.length} Friend${
          friends.length !== 1 ? "s" : ""
        }`}</FriendsCountContainer>
      </InfoInNumbersContainer>
    </ProfileInfoContainer>
  );
};

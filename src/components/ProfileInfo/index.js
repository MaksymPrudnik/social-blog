import { FriendActionsButton } from "../FriendActionsButton";
import { FriendsList } from "../FriendsList";
import {
  DateContainer,
  EmailContainer,
  FriendsCountContainer,
  InfoInNumbersContainer,
  PostCountContainer,
  ProfileImage,
  ProfileImageContainer,
  ProfileInfoContainer,
  UsernameContainer,
} from "./styled";

export const ProfileInfo = ({
  id,
  username,
  email,
  picture,
  wallpaper,
  friends,
  createdAt,
  postCount,
  isMe,
  relationship,
  requestId,
}) => (
  <ProfileInfoContainer>
    <ProfileImageContainer wallpaper={wallpaper}>
      <ProfileImage src={picture} alt="" />
    </ProfileImageContainer>
    <FriendActionsButton
      isMe={isMe}
      relationship={relationship}
      id={id}
      username={username}
      requestId={requestId}
    />
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
    <FriendsList />
  </ProfileInfoContainer>
);

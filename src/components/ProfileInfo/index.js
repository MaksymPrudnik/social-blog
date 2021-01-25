import { FriendActionsButton } from "../FriendActionsButton";
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
  wallpapper,
  friends,
  createdAt,
  postCount,
  isMe,
  relationship,
}) => (
  <ProfileInfoContainer>
    <ProfileImageContainer wallpapper={wallpapper}>
      <ProfileImage src={picture} alt="" />
    </ProfileImageContainer>
    {!isMe ? <FriendActionsButton relationship={relationship} id={id} /> : null}
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

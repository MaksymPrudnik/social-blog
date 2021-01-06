import {
  AuthorImage,
  AuthorNickname,
  BodyText,
  BodyTitle,
  PostBody,
  PostContainer,
  PostFooter,
  PostHeader,
  PostOptions,
  OptionDot,
  CommentsCount,
  CommentsContainer,
  CreationDate,
} from "./styled";

import { FaRegComment } from "react-icons/fa";
import { LikesButton } from "../LikesButton";

export const Post = ({
  id,
  title,
  text,
  author,
  media,
  likesCount,
  isLiked,
  commentsCount,
  createdAt,
}) => {
  const creationTime = calculateCreationTime(createdAt);
  return (
    <PostContainer>
      <PostHeader>
        <AuthorImage src={author.picture} alt="author picture" />
        <AuthorNickname>@{author.username}</AuthorNickname>
        <CreationDate> - {creationTime}</CreationDate>
        <PostOptions>
          <OptionDot />
          <OptionDot />
          <OptionDot />
        </PostOptions>
      </PostHeader>
      <PostBody>
        <BodyTitle>{title}</BodyTitle>
        <BodyText>{text}</BodyText>
        <div>
          {media.map((item) => (
            <img src={item} alt="media" />
          ))}
        </div>
      </PostBody>
      <PostFooter>
        <CommentsContainer>
          <FaRegComment />
          {commentsCount ? (
            <CommentsCount>{commentsCount}</CommentsCount>
          ) : null}
        </CommentsContainer>
        <LikesButton id={id} isLiked={isLiked} likesCount={likesCount} />
      </PostFooter>
    </PostContainer>
  );
};

const calculateCreationTime = (date) => {
  const creationDate = new Date(date);
  const currentDate = new Date();
  if (
    creationDate.getFullYear() === currentDate.getFullYear() &&
    creationDate.getMonth() === currentDate.getMonth()
  ) {
    if (creationDate.getDate() === currentDate.getDate()) {
      const hoursDifference = currentDate.getHours() - creationDate.getHours();
      if (hoursDifference === 0) {
        const minutesDifference =
          currentDate.getMinutes - creationDate.getMinutes();
        return minutesDifference
          ? `${minutesDifference} minutes ago`
          : "Less then a minute ago";
      }
      return `${hoursDifference} hours ago`;
    } else if (creationDate.getDate() === currentDate.getDate() - 1) {
      const hoursDifference =
        currentDate.getHours() + 24 - creationDate.getHours();
      return hoursDifference < 24
        ? `${hoursDifference} hours ago`
        : `Yesterday at ${creationDate.getTime()}`;
    }
  } else {
    return creationDate.toLocaleDateString();
  }
};

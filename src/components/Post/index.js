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
  LikesContainer,
  LikesCount,
  LikeHeart,
  CommentsContainer,
  CreationDate,
} from "./styled";

import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";

export const Post = ({
  id,
  title,
  text,
  author,
  likesCount,
  media,
  comments,
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
          {comments?.length ? (
            <CommentsCount>{comments.length}</CommentsCount>
          ) : null}
        </CommentsContainer>
        <LikesContainer>
          <LikeHeart isLiked={!!likesCount}>
            <AiOutlineHeart />
          </LikeHeart>
          {likesCount ? <LikesCount>{likesCount}</LikesCount> : null}
        </LikesContainer>
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

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
import { useSelector } from "react-redux";
import { useState } from "react";
import { PostOptionsDropdown } from "../PostOptionsDropdown";
import { useHistory } from "react-router-dom";

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
  isLinkDisabled,
}) => {
  const history = useHistory();

  const currentUser = useSelector((state) => state.auth);
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);

  const authorData = typeof author === "string" ? { ...currentUser } : author;

  const creationTime = calculateCreationTime(createdAt);

  const handlePostClick = ({ target }) => {
    const reservedId = ["post-options", "like-button"];
    if (isOptionsOpen) {
      setIsOptionsOpen(false);
    } else if (!reservedId.includes(target.id) && !isLinkDisabled) {
      history.push(`/post/${id}`);
    }
  };

  return (
    <PostContainer onClick={handlePostClick}>
      <PostHeader>
        <AuthorImage src={authorData.picture} alt="author picture" />
        <AuthorNickname>@{authorData.username}</AuthorNickname>
        <CreationDate> - {creationTime}</CreationDate>
        <PostOptions
          onClick={() => setIsOptionsOpen(!isOptionsOpen)}
          id="post-options"
        >
          <OptionDot />
          <OptionDot />
          <OptionDot />
        </PostOptions>
        {isOptionsOpen ? (
          <PostOptionsDropdown id={id} isMyPost={false} />
        ) : null}
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
      const minutesDifference =
        hoursDifference === 0
          ? currentDate.getMinutes() - creationDate.getMinutes()
          : 60 - creationDate.getMinutes() + currentDate.getMinutes();
      if (
        hoursDifference === 0 ||
        (hoursDifference === 1 && minutesDifference < 60)
      ) {
        return minutesDifference
          ? `${minutesDifference} minutes ago`
          : "Less then a minute ago";
      }
      return `${hoursDifference} hour${hoursDifference > 1 ? "s" : ""} ago`;
    } else if (creationDate.getDate() === currentDate.getDate() - 1) {
      const hoursDifference =
        currentDate.getHours() + 24 - creationDate.getHours();
      return hoursDifference < 24
        ? `${hoursDifference} hour${hoursDifference > 1 ? "s" : ""} ago`
        : `Yesterday at ${creationDate.getTime()}`;
    } else {
      const daysDifference = currentDate.getDate() - creationDate.getDate();
      return daysDifference / 7 < 2
        ? `${daysDifference} days ago`
        : `${(daysDifference / 7).toFixed(0)} weeks ago`;
    }
  } else {
    return creationDate.toLocaleDateString();
  }
};

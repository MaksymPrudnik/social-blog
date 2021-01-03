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
} from "./styled";

export const Post = ({
  id,
  title,
  text,
  author,
  likesCount,
  media,
  createdAt,
}) => {
  return (
    <PostContainer>
      <PostHeader>
        <AuthorImage src={author.picture} alt="author picture" />
        <AuthorNickname>@{author.username}</AuthorNickname>
        <PostOptions> * * * </PostOptions>
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
        <div> comments </div>
        <div> {likesCount} </div>
      </PostFooter>
    </PostContainer>
  );
};

import { Post } from "../Post";
import { NoPostsMessage, PostListContainer } from "./styled";

export const PostList = ({ posts }) =>
  posts?.length ? (
    <PostListContainer>
      {posts.map((postProps) => (
        <Post {...postProps} key={postProps.id} />
      ))}
    </PostListContainer>
  ) : (
    <NoPostsMessage>There're no posts yet!</NoPostsMessage>
  );

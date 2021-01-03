import { Post } from "../Post";
import { PostListContainer } from "./styled";

export const PostList = ({ posts }) =>
  posts.length ? (
    <PostListContainer>
      {posts.map((postProps) => (
        <Post {...postProps} key={postProps.id} />
      ))}
    </PostListContainer>
  ) : (
    "There're no posts yet!"
  );

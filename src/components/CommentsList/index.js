import { Comment } from "../Comment";
import { CommentsListContainer } from "./styled";

export const CommentList = ({ comments }) => (
  <CommentsListContainer>
    {comments.map((comment) => (
      <Comment key={comment.id} {...comment} />
    ))}
  </CommentsListContainer>
);

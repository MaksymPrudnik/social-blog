import { calculateCreationTime } from "../Post";
import {
  AuthorPicture,
  AuthorUsername,
  CommentContainer,
  CommentText,
  CreationDateText,
  FlexContainer,
  TextContainer,
} from "./styled";

export const Comment = ({ author, text, createdAt }) => (
  <CommentContainer>
    <AuthorPicture src={author.picture} alt="author" />
    <TextContainer>
      <FlexContainer>
        <AuthorUsername>@{author.username}</AuthorUsername>
        <CreationDateText>
          - {calculateCreationTime(createdAt)}
        </CreationDateText>
      </FlexContainer>
      <CommentText>{text}</CommentText>
    </TextContainer>
  </CommentContainer>
);

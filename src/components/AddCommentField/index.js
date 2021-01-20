import { useSelector } from "react-redux";
import { useFormInput } from "../../hooks/useFormInput";
import {
  AddCommentContainer,
  AuthorPicture,
  CommentButton,
  CommentInput,
} from "./styled";

export const AddCommentField = () => {
  const { picture } = useSelector((state) => state.auth);

  const text = useFormInput();

  return (
    <AddCommentContainer>
      <AuthorPicture src={picture} alt="author" />
      <CommentInput type="text" {...text.inputProps} />
      <CommentButton>+</CommentButton>
    </AddCommentContainer>
  );
};

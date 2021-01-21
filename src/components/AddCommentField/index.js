import { useDispatch, useSelector } from "react-redux";
import { useFormInput } from "../../hooks/useFormInput";
import { commentPostStart } from "../../state/comment/actions";
import {
  AddCommentContainer,
  AuthorPicture,
  CommentForm,
  CommentButton,
  CommentInput,
} from "./styled";

export const AddCommentField = ({ id }) => {
  const dispatch = useDispatch();
  const { picture } = useSelector((state) => state.auth);

  const text = useFormInput();

  const handleSend = () => {
    dispatch(commentPostStart(id, text.inputProps.value));

    text.clearValue();
  };

  return (
    <AddCommentContainer>
      <AuthorPicture src={picture} alt="author" />
      <CommentForm>
        <CommentInput type="text" {...text.inputProps} />
        <CommentButton onClick={handleSend}>Send</CommentButton>
      </CommentForm>
    </AddCommentContainer>
  );
};

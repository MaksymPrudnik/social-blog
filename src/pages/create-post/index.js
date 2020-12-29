import { FormInput } from "../../components/FormInput";
import { useFormInput } from "../../hooks/useFormInput";
import {
  ButtonsContainer,
  CreatePostButton,
  CreatePostContainer,
  CreatePostHeader,
} from "./styled";

export const CreatePostPage = () => {
  const header = useFormInput();
  const text = useFormInput();

  return (
    <CreatePostContainer>
      <CreatePostHeader>Create new post</CreatePostHeader>
      <FormInput
        type="text"
        name="header"
        label="Header"
        {...header.inputProps}
      />
      <FormInput
        as="textarea"
        rows="10"
        resize="none"
        name="text"
        label="Body"
        {...text.inputProps}
      />
      <ButtonsContainer>
        <CreatePostButton
          disabled={
            !header.inputProps.value.length || !text.inputProps.value.length
          }
        >
          Create
        </CreatePostButton>
      </ButtonsContainer>
    </CreatePostContainer>
  );
};

/*
My very first post in new and redesigned application...
now i will enter some really long information to see
if this text area scales well enough,
but it takes to much time to type, so i think... So it worked perfect, 
just need to fix label position little bit.
*/

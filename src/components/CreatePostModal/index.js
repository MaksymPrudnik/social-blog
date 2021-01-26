import ReactDOM from "react-dom";

import { FormInput } from "../FormInput";
import { useFormInput } from "../../hooks/useFormInput";
import {
  ButtonsContainer,
  CreatePostButton,
  CreatePostContainer,
  CreatePostOverlay,
  CreatePostHeader,
  CloseButton,
} from "./styled";
import { useDispatch } from "react-redux";
import { closeCreatePostModal } from "../../state/post-modal/actions";
import { createPostStart } from "../../state/post/actions";
import { useHistory, useRouteMatch } from "react-router-dom";

export const CreatePostModal = ({ isOpen }) => {
  const history = useHistory();
  const { url } = useRouteMatch();
  const dispatch = useDispatch();

  const title = useFormInput();
  const text = useFormInput();

  const handleClose = () => {
    if (url === "/create/post") {
      history.goBack();
    } else {
      dispatch(closeCreatePostModal());
    }
  };

  const handleCreate = () => {
    dispatch(
      createPostStart({
        title: title.inputProps.value,
        text: text.inputProps.value,
      })
    );
    title.clearValue();
    text.clearValue();
    handleClose();
  };

  return isOpen
    ? ReactDOM.createPortal(
        <>
          <CreatePostOverlay onClick={() => dispatch(closeCreatePostModal())} />
          <CreatePostContainer>
            <CloseButton onClick={handleClose}>{"\u2715"}</CloseButton>
            <CreatePostHeader>Create new post</CreatePostHeader>
            <FormInput
              type="text"
              name="header"
              label="Header"
              {...title.inputProps}
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
                  !title.inputProps.value.length ||
                  !text.inputProps.value.length
                }
                onClick={handleCreate}
              >
                Create
              </CreatePostButton>
            </ButtonsContainer>
          </CreatePostContainer>
        </>,
        document.getElementById("portal")
      )
    : null;
};

/*
My very first post in a new and redesigned application...
now I will enter some really long information to see
if this text area scales well enough,
but it takes too much time to type, so I think... So it worked perfectly, 
just need to fix the label position a little bit.
*/

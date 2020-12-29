import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { FormInput } from "../../components/FormInput";
import { useFormInput } from "../../hooks/useFormInput";
import { loginStart } from "../../state/auth/actions";
import {
  FormContainer,
  ImageContainer,
  SigninContainer,
  SubmitButton,
} from "./styled";

export const SignIn = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const email = useFormInput();
  const password = useFormInput();
  const onSubmit = (event) => {
    event.preventDefault();

    dispatch(loginStart(email.inputProps.value, password.inputProps.value));

    email.clearValue();
    password.clearValue();

    history.push("/");
  };

  return (
    <SigninContainer>
      <ImageContainer />
      <FormContainer onSubmit={onSubmit}>
        <FormInput
          type="email"
          name="email"
          label="Email"
          {...email.inputProps}
        />
        <FormInput
          type="password"
          name="password"
          label="Password"
          {...password.inputProps}
        />

        <SubmitButton type="submit" value="Sing in" />
      </FormContainer>
    </SigninContainer>
  );
};

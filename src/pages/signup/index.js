import { useDispatch } from "react-redux";
import { FormInput } from "../../components/FormInput";
import { useFormInput } from "../../hooks/useFormInput";
import { registerStart } from "../../state/auth/actions";
import {
  FormContainer,
  ImageContainer,
  SignupContainer,
  SubmitButton,
} from "./styled";

export const SignUp = () => {
  const dispatch = useDispatch();
  const email = useFormInput();
  const password = useFormInput();
  const username = useFormInput();
  const confirmPassword = useFormInput();
  const onSubmit = (event) => {
    event.preventDefault();

    if (password.inputProps.value !== confirmPassword.inputProps.value) {
      alert("Passwords do not match");
      return;
    }

    dispatch(
      registerStart(
        email.inputProps.value,
        password.inputProps.value,
        username.inputProps.value
      )
    );

    email.clearValue();
    password.clearValue();
    username.clearValue();
    confirmPassword.clearValue();
  };

  return (
    <SignupContainer>
      <ImageContainer />
      <FormContainer onSubmit={onSubmit}>
        <FormInput
          type="text"
          name="username"
          label="Username"
          {...username.inputProps}
        />
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
        <FormInput
          type="password"
          name="confirm"
          label="Confirm password"
          {...confirmPassword.inputProps}
        />

        <SubmitButton type="submit" value="Sing in" />
      </FormContainer>
    </SignupContainer>
  );
};

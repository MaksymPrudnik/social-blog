import { useForm } from "react-hook-form";
import { FormInput } from "../../components/FormInput";
import {
  FormContainer,
  ImageContainer,
  SigninContainer,
  SubmitButton,
} from "./styled";

export const SignIn = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <SigninContainer>
      <ImageContainer />
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          type="email"
          name="Email"
          ref={register({
            required: true,
            pattern: /\S+@\S+\.\S+/,
          })}
          label="Email"
        />
        <FormInput
          type="text"
          name="Password"
          ref={register({ required: true, pattern: /[a-zA-Z0-9]{6,15}/ })}
          label="Password"
        />

        <SubmitButton type="submit" value="Sing in" />
      </FormContainer>
    </SigninContainer>
  );
};

import styled from "styled-components";

export const SigninContainer = styled.div`
  width: 100%;
  flex-grow: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: center;
`;

export const ImageContainer = styled.div`
  background-color: lightcoral;
  width: 50vw;
  height: 100%;
  @media screen and (max-width: 800px) {
    & {
      display: none;
    }
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const SubmitButton = styled.input`
  padding: 0.5rem;
  border: 1px solid grey;
  border-radius: 0.3rem;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.2rem;
  background-color: black;
  color: white;

  &:hover {
    background-color: #111;
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;

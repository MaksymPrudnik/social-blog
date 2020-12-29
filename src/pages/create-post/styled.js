import styled from "styled-components";

import { FormInput } from "../../components/FormInput";

export const CreatePostContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CreatePostHeader = styled.h2`
  font-weight: 500;

  @media screen and (max-width: 800px) {
    padding-bottom: 0.5rem;
    margin-bottom: 3rem;
    border-bottom: 1px solid lightgrey;
  }
`;

export const CreatePostInput = styled(FormInput)`
  min-width: 70vw;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const CreatePostButton = styled.button`
  border: none;
  padding: 0.5rem;
  min-width: 35vw;
  background-color: #112;
  color: white;
  font-size: 1.3rem;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 0.5rem;
  cursor: pointer;

  &:disabled {
    background-color: #333;
    cursor: unset;
  }
`;

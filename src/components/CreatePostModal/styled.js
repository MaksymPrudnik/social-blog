import styled from "styled-components";

import { FormInput } from "../FormInput";

export const CreatePostOverlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #0009;
`;

export const CreatePostContainer = styled.div`
  background-color: white;
  padding: 1.5rem;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;

  @media screen and (max-width: 600px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transform: unset;
  }
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
  min-width: 35%;
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

export const CloseButton = styled.div`
  align-self: flex-end;
  color: grey;
  font-size: 2rem;
  cursor: pointer;
`;

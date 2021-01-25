import styled from "styled-components";

export const FriendshipButton = styled.button`
  margin: 1.5rem 1.5rem 0 0;
  padding: 0.2rem 0.5rem;
  border: 1px solid ${({ color }) => color};
  border-radius: 0.7rem;
  color: ${({ color }) => color};
  background-color: ${({ backgroundColor }) => backgroundColor};
  align-self: flex-end;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    color: ${({ color, hoverColor }) => (hoverColor ? hoverColor : color)};
    background-color: ${({ backgroundColor, hoverBackgroundColor }) =>
      hoverBackgroundColor ? hoverBackgroundColor : backgroundColor};
    border-color: ${({ color, hoverColor }) =>
      hoverColor ? hoverColor : color};
  }

  @media screen and (max-width: 600px) {
    font-size: 1rem;
    padding: 0.1rem 0.4rem;
    border-radius: 0.4rem;
  }
`;

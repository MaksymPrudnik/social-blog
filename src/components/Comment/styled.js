import styled from "styled-components";

export const CommentContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 0.3rem;
  border-bottom: 1px solid lightgray;
`;

export const AuthorPicture = styled.img`
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;

export const TextContainer = styled.div`
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 0.5rem;
`;

export const FlexContainer = styled.div`
  display: flex;
`;

export const AuthorUsername = styled.div`
  font-size: 1.1rem;
  font-weight: 550;
  cursor: pointer;
`;

export const CreationDateText = styled.div`
  font-size: 0.9rem;
  font-weight: 250;
  color: grey;
  padding-left: 0.5rem;
  align-self: center;
`;

export const CommentText = styled.div`
  width: 100%;
  margin-top: 0.3rem;
  text-align: left;
`;

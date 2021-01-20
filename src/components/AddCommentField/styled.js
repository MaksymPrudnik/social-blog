import styled from "styled-components";

export const AddCommentContainer = styled.div`
  display: flex;
  max-width: 40rem;
  padding: 0.3rem;
  margin: 0.5rem auto;
  border-bottom: 1px solid lightgrey;
`;

export const AuthorPicture = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  object-fit: cover;
`;

export const CommentInput = styled.input`
  flex-grow: 2;
  margin-left: 0.5rem;
  padding-left: 0.5rem;
  border-radius: 0.5rem 0 0 0.5rem;
  border: 1px solid lightgrey;
  border-right: none;
  height: 2rem;
  font-size: 1rem;
`;

export const CommentButton = styled.div`
  padding: 0 0.5rem;
  height: 2rem;
  border-radius: 0 0.5rem 0.5rem 0;
  border: 1px solid lightgrey;
  border-left: none;
  background-color: black;
  color: whitesmoke;
  display: flex;
  align-items: center;
`;

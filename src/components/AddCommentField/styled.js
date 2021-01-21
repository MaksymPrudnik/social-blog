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

export const CommentForm = styled.div`
  display: flex;
  padding: 0.2rem;
  border: 1px solid lightgray;
  border-radius: 0.5rem;
  margin-left: 0.5rem;
  width: 100%;
`

export const CommentInput = styled.input`
  flex-grow: 2;
  text-align: left;
  border: none;
  font-size: 1.1rem;
  min-width: 150px;
  padding-left: 0.5rem;
  overflow-wrap: break-word;

  &:focus {
    outline: none;
  }
`;

export const CommentButton = styled.button`
  padding: 0 0.5rem;
  border: none;
  color: #01011b;
  background-color: transparent;
  display: flex;
  align-items: center;
  font-weight: 550;
  cursor: pointer;

  &:hover {
    color: #484874;
  }
`;

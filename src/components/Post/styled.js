import styled from "styled-components";

export const PostContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  border-bottom: 0.5px solid lightgray;
`;

export const PostHeader = styled.div`
  width: 100%;
  display: flex;
  position: relative;
`;

export const PostBody = styled.div`
  width: 80%;
  align-self: center;
`;

export const PostFooter = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 80%;
  align-self: center;
  border-top: 0.5px solid lightgray;
  padding-top: 0.5rem;
`;

export const AuthorImage = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  object-fit: cover;
`;

export const AuthorNickname = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  text-align: left;
  padding-left: 1rem;
  align-self: center;
`;

export const CreationDate = styled.div`
  align-self: center;
  text-align: left;
  flex-grow: 2;
  font-size: 0.9rem;
  padding-left: 0.5rem;
  color: gray;
  font-weight: 250;
`;

export const PostOptions = styled.div`
  display: flex;
  padding: 0.5rem;
  cursor: pointer;
  height: 20px;
`;

export const OptionDot = styled.div`
  height: 0.3rem;
  width: 0.3rem;
  margin-left: 0.25rem;
  border-radius: 50%;
  background-color: #222;
`;

export const BodyTitle = styled.header`
  font-size: 1.2rem;
  font-weight: 500;
  border-bottom: 0.5px solid lightgray;
  padding-bottom: 0.5rem;
`;

export const BodyText = styled.p`
  padding: 0.5rem 0;
  font-family: monospace;
  font-size: 1.1rem;
  text-align: left;
`;

export const CommentsContainer = styled.div`
  display: flex;
  cursor: ${({ isLinkDisabled }) => (isLinkDisabled ? "unset" : "pointer")};
`;

export const CommentsCount = styled.div`
  font-size: 0.9rem;
  margin-left: 0.3rem;
`;

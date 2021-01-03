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
`;

export const PostBody = styled.div`
  width: 80%;
  align-self: center;
`;

export const PostFooter = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const AuthorImage = styled.img`
  max-width: 3rem;
  max-height: 3rem;
  border-radius: 50%;
`;

export const AuthorNickname = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  flex-grow: 2;
  text-align: left;
  padding-left: 1rem;
  align-self: center;
`;

export const PostOptions = styled.div`
  justify-self: end;
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
`;

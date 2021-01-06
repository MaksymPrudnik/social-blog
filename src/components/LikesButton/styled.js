import styled from "styled-components";

export const LikesContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const LikeHeart = styled.div`
  color: ${({ isLiked }) => (isLiked ? "red" : "black")};
  cursor: pointer;
`;

export const LikesCount = styled.div`
  font-size: 0.9rem;
  margin-left: 0.3rem;
`;

import styled from "styled-components";

export const ProfileInfoContainer = styled.header`
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;

  @media screen and (max-width: 600px) {
    padding-bottom: 1rem;
  }
`;

export const ProfileImageContainer = styled.div`
  min-height: 24vh;
  position: relative;
  display: flex;
  background-color: lightcoral;
  background: url(${({ wallpapper }) => wallpapper});
  background-size: "cover";
`;

export const ProfileImage = styled.img`
  width: 20vh;
  height: 20vh;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid white;
  position: absolute;
  top: 12vh;
  left: 2rem;

  @media screen and (max-width: 600px) {
    width: 15vh;
    height: 15vh;
  }
`;

export const UsernameContainer = styled.div`
  align-self: flex-end;
  font-size: 1.5rem;
  font-weight: 550;
  padding: 1.2rem 1.5rem;

  @media screen and (max-width: 600px) {
    font-size: 1.2rem;
    padding: 1rem 1.5rem;
  }
`;

export const EmailContainer = styled.div`
  font-size: 1.1rem;
`;

export const DateContainer = styled.div`
  font-size: 0.9rem;
  font-weight: 250;
  color: grey;
`;

export const InfoInNumbersContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 1rem;
  font-size: 1.1rem;
  font-weight: 500;
`;

export const PostCountContainer = styled.div``;

export const FriendsCountContainer = styled.div``;

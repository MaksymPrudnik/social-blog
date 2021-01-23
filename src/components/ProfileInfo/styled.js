import styled from "styled-components";

export const ProfileInfoContainer = styled.header`
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;
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
  max-width: 20vh;
  height: 20vh;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid white;
  position: absolute;
  top: 12vh;
  left: 2rem;
`;

export const UsernameContainer = styled.div`
  align-self: flex-end;
  font-size: 1.5rem;
  font-weight: 500;
  padding: 1.5rem;
`;

export const EmailContainer = styled.div`
  font-size: 1.1rem;
`;

export const DateContainer = styled.div`
  font-size: 0.9rem;
  font-weight: 250;
  color: grey;
`;

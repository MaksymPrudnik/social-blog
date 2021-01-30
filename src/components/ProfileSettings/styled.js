import styled from "styled-components";

export const ProfileSettingsContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 800px;
`;

export const Header = styled.h2`
  margin-bottom: 1rem;
`;

export const PicturesContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0.5rem 1rem;
  width: 100%;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const UploadPictureContainer = styled.label`
  cursor: pointer;

  & input {
    display: none;
  }
`;

export const ProfilePicture = styled.img`
  width: 10rem;
  height: 10rem;
  object-fit: cover;
  border-radius: 50%;

  @media screen and (max-width: 600px) {
    margin-bottom: 0.5rem;
  }
`;

export const WallpaperPicture = styled.img`
  width: 25rem;
  height: 10rem;
  object-fit: cover;

  @media screen and (max-width: 600px) {
    max-height: 20vh;
    max-width: 96vw;
  }
`;

export const TextContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  width: 20rem;
`;

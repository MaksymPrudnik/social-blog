import styled from "styled-components";

export const UsersListContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 100%;
  margin: 1rem 0.5rem 0;
`;

export const UserRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const UserData = styled.div`
  display: flex;
  align-items: center;
`;

export const UserPicture = styled.img`
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;

export const UsernameContainer = styled.div`
  font-size: 1.1rem;
  font-weight: 550;
  margin-left: 0.5rem;
  cursor: pointer;
`;

export const SettingsActionButtons = styled.div`
  display: flex;
  justify-content: space-evenly;

  & button:last-child {
    color: darkred;
    border-color: darkred;
  }
`;

export const UserActionButton = styled.button`
  background-color: transparent;
  border: 1px solid grey;
  border-radius: 0.3rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
`;

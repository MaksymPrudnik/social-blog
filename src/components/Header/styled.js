import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
  padding: 0.5rem 1rem 0.25rem;
`;

export const LogoLink = styled(Link)`
  padding: 0.5rem;
  font-weight: 550;
`;

export const AuthContainer = styled.div`
  display: ${({ isAuthorized }) => (isAuthorized ? "none" : "flex")};
  justify-content: space-evenly;
`;

export const UserNavContainer = styled.div`
  display: ${({ isAuthorized }) => (isAuthorized ? "flex" : "none")};
  justify-content: space-evenly;
`;

export const NavLink = styled(Link)`
  padding: 0.5rem;
`;

export const NavImage = styled.img`
  display: block;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  margin: 0 1rem;
  object-fit: cover;
  cursor: pointer;
`;

export const LogoutButton = styled.button`
  padding: 0 0.5rem;
  border: none;
  text-transform: uppercase;
  background-color: transparent;
  cursor: pointer;

  .icon {
    display: none;
  }

  @media screen and (max-width: 800px) {
    .text {
      display: none;
    }
    .icon {
      display: block;
      font-size: 2rem;
    }
  }
`;

export const NewPostButton = styled(LogoutButton)`
  &:focus {
    outline: none;
  }
`;

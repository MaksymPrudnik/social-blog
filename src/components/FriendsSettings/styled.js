import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const FriendsSettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  width: 100%;
`;

export const FriendsSettingsNav = styled.div`
  display: flex;
  margin: 0.5rem;
  border: 1px solid lightgrey;
  border-radius: 0.2rem;
  border-bottom: none;
`;

export const FriendsNavLink = styled(NavLink)`
  min-width: 5rem;
  padding: 0.2rem 0.5rem;
  font-size: 1.2rem;
  border-bottom: 1px solid lightgrey;

  &.selected {
    color: darkblue;
    border-bottom: 3px solid darkblue;
  }
`;

export const UsersSearch = styled.input`
  min-width: 400px;
  max-width: 90vw;
  border: 1px solid grey;
  border-radius: 0.3rem;
  line-height: 1.5rem;
  font-size: 1.1rem;
`;

import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SettingsNav = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid lightgrey;
  border-radius: 0.5rem;
  max-width: 800px;
  width: 100%;
  min-height: 2.5rem;
`;

export const SettingsNavButton = styled(NavLink)`
  min-width: 8rem;
  border: 1px solid lightgrey;
  border-radius: 0.3rem;
  box-shadow: 1px 1px 1px grey;

  font-size: 1.2rem;
  color: grey;

  &:visited {
    color: grey;
  }

  &.active {
    box-shadow: none;
    color: black;
    border-color: black;
  }
`;

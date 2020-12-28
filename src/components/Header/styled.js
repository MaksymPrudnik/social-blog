import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
  padding: 0 1rem;
`;

export const LogoLink = styled(Link)`
  padding: 0.5rem;
  font-weight: 550;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const NavLink = styled(Link)`
  padding: 0.5rem;
`;

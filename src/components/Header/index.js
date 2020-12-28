import { HeaderContainer, NavContainer, LogoLink, NavLink } from "./styled";

export const Header = () => (
  <HeaderContainer>
    <LogoLink to="/">Home</LogoLink>
    <NavContainer>
      <NavLink to="/signin">Sign in</NavLink>
      <NavLink to="/register">Sign up</NavLink>
    </NavContainer>
  </HeaderContainer>
);

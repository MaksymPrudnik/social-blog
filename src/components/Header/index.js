import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { logout } from "../../state/auth/actions";

import { AiOutlineLogout, AiFillEdit } from "react-icons/ai";

import {
  HeaderContainer,
  AuthContainer,
  LogoLink,
  NavLink,
  UserNavContainer,
  LogoutButton,
  NavImage,
  NewPostButton,
} from "./styled";

export const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { pathname } = useLocation();
  const { username, picture } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());

    history.push("/");
  };

  return (
    <HeaderContainer>
      <LogoLink to="/">Sociaten</LogoLink>
      <AuthContainer isAuthorized={!!username}>
        <NavLink to="/signin">Sign in</NavLink>
        <NavLink to="/register">Sign up</NavLink>
      </AuthContainer>
      <UserNavContainer isAuthorized={!!username}>
        <NewPostButton onClick={() => history.push("/create/post")}>
          <span className="text">New post</span>
          <span className="icon">
            <AiFillEdit />
          </span>
        </NewPostButton>
        <LogoutButton onClick={handleLogout}>
          <span className="text">Sign out</span>
          <span className="icon">
            <AiOutlineLogout />
          </span>
        </LogoutButton>
        {!pathname.includes("/user/me") ? (
          <NavImage
            src={picture}
            alt="profile image link"
            onClick={() => history.push("/user/me")}
          />
        ) : null}
      </UserNavContainer>
    </HeaderContainer>
  );
};

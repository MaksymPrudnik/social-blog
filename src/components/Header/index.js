import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { logout } from "../../state/auth/actions";
import { openCreatePostModal } from "../../state/post-modal/actions";

import { CreatePostModal } from "../CreatePostModal";

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
  const { isOpen } = useSelector((state) => state.postModal);

  const handleLogout = () => {
    dispatch(logout());

    history.push("/");
  };

  const handleCreatePost = () => {
    if (window.innerWidth > 800) {
      dispatch(openCreatePostModal());
    } else {
      history.push("/create/post");
    }
  };

  return (
    <HeaderContainer>
      <CreatePostModal isOpen={isOpen} />
      <LogoLink to="/">Sociaten</LogoLink>
      <AuthContainer isAuthorized={!!username}>
        <NavLink to="/signin">Sign in</NavLink>
        <NavLink to="/register">Sign up</NavLink>
      </AuthContainer>
      <UserNavContainer isAuthorized={!!username}>
        <NewPostButton onClick={handleCreatePost}>
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
            onClick={() => history.push(`/user/me`)}
          />
        ) : null}
      </UserNavContainer>
    </HeaderContainer>
  );
};

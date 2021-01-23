import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/helpers/Loader/Loader";
import { PostList } from "../../components/PostList";
import { ProfileInfo } from "../../components/ProfileInfo";
import { useCheckAuth } from "../../hooks/useCheckAuth";
import {
  getProfilePostsStart,
  getProfileStart,
} from "../../state/profile/actions";
import { ProfilePageContainer } from "./styled";

export const UserPage = ({
  match: {
    params: { username },
  },
}) => {
  const user = useCheckAuth();

  const dispatch = useDispatch();
  const { profile, posts, isLoading, error } = useSelector(
    (state) => state.profile
  );

  const isMe = username === "me";

  useEffect(() => {
    dispatch(getProfileStart(username));
    dispatch(getProfilePostsStart(user));
  }, [dispatch, username, user]);

  if (error) {
    console.log(error);
  }

  return isLoading || (!profile && !error) ? (
    <div>
      <Loader size="3rem" />
    </div>
  ) : (
    <ProfilePageContainer>
      <ProfileInfo {...profile} isMe={isMe} />
      <PostList posts={posts} />
    </ProfilePageContainer>
  );
};

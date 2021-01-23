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

  const profileUsername = profile?.isMe ? "me" : username;
  useEffect(() => {
    dispatch(getProfileStart(profileUsername));
    dispatch(getProfilePostsStart(user));
  }, [dispatch, user, profileUsername]);

  if (error) {
    console.log(error);
  }

  return isLoading || (!profile && !error) ? (
    <div>
      <Loader size="3rem" />
    </div>
  ) : (
    <ProfilePageContainer>
      <ProfileInfo {...profile} isMe={profile.isMe} postCount={posts.length} />
      <PostList posts={posts} />
    </ProfilePageContainer>
  );
};

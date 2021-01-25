import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/helpers/Loader/Loader";
import { PostList } from "../../components/PostList";
import { ProfileInfo } from "../../components/ProfileInfo";
import { useCheckAuth } from "../../hooks/useCheckAuth";
import {
  clearProfileData,
  getProfilePostsStart,
  getProfileStart,
} from "../../state/profile/actions";
import { ProfilePageContainer } from "./styled";

export const UserPage = ({
  match: {
    params: { username },
  },
}) => {
  useCheckAuth();

  const dispatch = useDispatch();
  const {
    profile,
    posts,
    isProfileLoading,
    isPostsLoading,
    error,
  } = useSelector((state) => state.profile);

  useEffect(() => {
    if (!profile && !isProfileLoading) {
      dispatch(getProfileStart(username));
    }
    if (!posts && !isPostsLoading) {
      dispatch(getProfilePostsStart(username));
    }
  }, [dispatch, username, profile, posts, isProfileLoading, isPostsLoading]);

  useEffect(() => {
    return () => {
      dispatch(clearProfileData());
    };
  }, [dispatch]);

  if (error) {
    console.log(error);
  }

  return isProfileLoading || (!profile && !error) ? (
    <div>
      <Loader size="3rem" />
    </div>
  ) : (
    <ProfilePageContainer>
      <ProfileInfo {...profile} isMe={profile.isMe} postCount={posts?.length} />
      <PostList posts={posts} />
    </ProfilePageContainer>
  );
};

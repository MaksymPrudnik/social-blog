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
  useCheckAuth();

  const dispatch = useDispatch();
  const {
    profile,
    posts,
    isProfileLoading,
    isPostsLoading,
    error,
  } = useSelector((state) => state.profile);

  const requestUsername = profile?.isMe ? "me" : username;
  useEffect(() => {
    if (!profile && !isProfileLoading) {
      dispatch(getProfileStart(requestUsername));
    }
    if (!posts && !isPostsLoading) {
      dispatch(getProfilePostsStart(requestUsername));
    }
  }, [
    dispatch,
    requestUsername,
    profile,
    posts,
    isProfileLoading,
    isPostsLoading,
  ]);

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

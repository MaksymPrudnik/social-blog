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
    dispatch(getProfileStart(username));
    dispatch(getProfilePostsStart(username));

    return () => {
      dispatch(clearProfileData());
    };
  }, [dispatch, username]);

  if (error) {
    console.log(error);
    console.log(isPostsLoading);
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

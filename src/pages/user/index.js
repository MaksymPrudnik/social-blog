import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/helpers/Loader/Loader";
import { PostList } from "../../components/PostList";
import { ProfileInfo } from "../../components/ProfileInfo";
import { useCheckAuth } from "../../hooks/useCheckAuth";
import { getProfileStart } from "../../state/profile/actions";
import { ProfilePageContainer } from "./styled";

export const UserPage = ({
  match: {
    params: { username },
  },
}) => {
  useCheckAuth();

  const dispatch = useDispatch();
  const { profile, posts, isLoading, error } = useSelector(
    (state) => state.profile
  );

  const isMe = username === "me";

  useEffect(() => {
    dispatch(getProfileStart(username));
  }, [dispatch, username]);

  if (error) {
    console.log(error);
    console.log(posts);
  }

  return isLoading || (!profile && !error) ? (
    <div>
      <Loader size="3rem" />
    </div>
  ) : (
    <ProfilePageContainer>
      <ProfileInfo {...profile} isMe={isMe} />
      <PostList posts={[]} />
    </ProfilePageContainer>
  );
};

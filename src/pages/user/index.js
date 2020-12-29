import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/helpers/Loader/Loader";
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
  const { profile, isLoading, error } = useSelector((state) => state.profile);

  const isMe = username === "me";

  useEffect(() => {
    dispatch(getProfileStart(username));
  }, [dispatch, username]);

  return isLoading || (!profile && !error) ? (
    <div>
      <Loader size="3rem" />
    </div>
  ) : (
    <ProfilePageContainer>
      {profile ? <ProfileInfo {...profile} isMe={isMe} /> : null}
      <div>{!!error ? error : null}</div>
    </ProfilePageContainer>
  );
};

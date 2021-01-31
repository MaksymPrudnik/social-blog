import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getFriendListStart } from "../../state/profile/actions";
import { FriendPicture, FriendsListContainer } from "./styled";

export const ProfileFriendsList = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    profile: { username },
    isFriendsLoading,
    friends,
  } = useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(getFriendListStart(username));
  }, [dispatch, username]);

  return !isFriendsLoading && friends ? (
    <FriendsListContainer>
      {friends.map((friend, i) => (
        <FriendPicture
          onClick={() => history.push(`/user/${friend.username}`)}
          title={friend.username}
          src={friend.picture}
          alt=""
          key={i}
        />
      ))}
    </FriendsListContainer>
  ) : (
    <div>Loading</div>
  );
};

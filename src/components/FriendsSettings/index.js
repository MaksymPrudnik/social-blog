import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { useFormInput } from "../../hooks/useFormInput";
import {
  acceptFriendRequestStart,
  cancelFriendRequestStart,
  removeFriendStart,
} from "../../state/profile/actions";
import {
  getFriendsStart,
  getMadeRequestStart,
  getReceivedRequestsStart,
} from "../../state/settings/actions";
import { SettingsUsersList } from "../SettingsUsersList";
import {
  FriendsNavLink,
  FriendsSettingsContainer,
  FriendsSettingsNav,
  UsersSearch,
} from "./styled";

export const FriendsSettings = () => {
  const dispatch = useDispatch();
  const { url, path } = useRouteMatch();

  const { id, username } = useSelector((state) => state.auth);
  const { friends, madeRequests, receivedRequests } = useSelector(
    (state) => state.settings
  );

  const search = useFormInput("");

  useEffect(() => {
    dispatch(getFriendsStart(username));
    dispatch(getMadeRequestStart(id));
    dispatch(getReceivedRequestsStart(id));
  }, [dispatch, username, id]);

  const friendsButtons = [
    {
      text: "Remove",
      action: (id) => dispatch(removeFriendStart(id)),
    },
  ];

  const madeRequestsButtons = [
    {
      text: "Cancel",
      action: (id) => dispatch(cancelFriendRequestStart(id)),
    },
  ];

  const receivedRequestsButtons = [
    {
      text: "Accept",
      action: (id) => dispatch(acceptFriendRequestStart(id)),
    },
    {
      text: "Reject",
      action: (id) => dispatch({ type: "rejectFriendRequest", payload: id }),
    },
  ];

  return (
    <FriendsSettingsContainer>
      <FriendsSettingsNav>
        <FriendsNavLink exact to={url} activeClassName="selected">
          Accepted
        </FriendsNavLink>
        <FriendsNavLink
          to={`${url}/received-requests`}
          activeClassName="selected"
        >
          Received
        </FriendsNavLink>
        <FriendsNavLink to={`${url}/made-requests`} activeClassName="selected">
          Made
        </FriendsNavLink>
      </FriendsSettingsNav>
      <UsersSearch type="text" {...search.inputProps} />
      <Switch>
        <Route exact path={path}>
          {friends ? (
            <SettingsUsersList
              initialList={friends}
              search={search.inputProps.value}
              buttons={friendsButtons}
            />
          ) : (
            <div>Loading</div>
          )}
        </Route>
        <Route path={`${path}/received-requests`}>
          {receivedRequests ? (
            <SettingsUsersList
              initialList={receivedRequests}
              search={search.inputProps.value}
              buttons={receivedRequestsButtons}
            />
          ) : (
            <div>Loading</div>
          )}
        </Route>
        <Route path={`${path}/made-requests`}>
          {madeRequests ? (
            <SettingsUsersList
              initialList={madeRequests}
              search={search.inputProps.value}
              buttons={madeRequestsButtons}
            />
          ) : (
            <div>Loading</div>
          )}
        </Route>
      </Switch>
    </FriendsSettingsContainer>
  );
};

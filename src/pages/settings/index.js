import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { getProfileSettingsStart } from "../../state/settings/actions";
import { ProfileSettings } from "../../components/ProfileSettings";
import { SettingsContainer, SettingsNav, SettingsNavButton } from "./styled";
import { FriendsSettings } from "../../components/FriendsSettings";

export const SettingsPage = () => {
  const dispatch = useDispatch();
  const { url, path } = useRouteMatch();

  const { user, isLoading, error } = useSelector((state) => state.settings);

  useEffect(() => {
    dispatch(getProfileSettingsStart());
  }, [dispatch]);

  if (error) {
    console.log(error);
  }

  return user && !isLoading ? (
    <SettingsContainer>
      <SettingsNav>
        <SettingsNavButton to={`${url}/profile`} activeClassName="active">
          Profile
        </SettingsNavButton>
        <SettingsNavButton to={`${url}/friends`} activeClassName="active">
          Friends
        </SettingsNavButton>
      </SettingsNav>

      <Switch>
        <Route
          exact
          path={`${path}/profile`}
          render={() => <ProfileSettings user={user} />}
        />
        <Route path={`${path}/friends`} component={FriendsSettings} />
      </Switch>
    </SettingsContainer>
  ) : (
    <div>Loading</div>
  );
};

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfileSettingsStart } from "../../state/settings/actions";
import { ProfileSettings } from "../../components/ProfileSettings";
import { SettingsContainer } from "./styled";

export const SettingsPage = () => {
  const dispatch = useDispatch();

  const { user, isLoading, error } = useSelector((state) => state.settings);

  useEffect(() => {
    dispatch(getProfileSettingsStart());
  }, [dispatch]);

  if (error) {
    console.log(error);
  }
  return user && !isLoading ? (
    <SettingsContainer>
      <ProfileSettings user={user} />
      <div>
        <h2>Friends</h2>
      </div>
    </SettingsContainer>
  ) : (
    <div>Loading</div>
  );
};

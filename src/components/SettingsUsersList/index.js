import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  SettingsActionButtons,
  UserActionButton,
  UserData,
  UsernameContainer,
  UserPicture,
  UserRow,
  UsersListContainer,
} from "./styled";

export const SettingsUsersList = ({ initialList, search, buttons }) => {
  const history = useHistory();

  const [users, setUsers] = useState(initialList);

  useEffect(() => {
    setUsers(initialList.filter((user) => user.username.includes(search)));
  }, [initialList, search]);

  return users.length ? (
    <UsersListContainer>
      {users.map((user, i) => (
        <UserRow key={i}>
          <UserData>
            <UserPicture
              src={user.picture}
              alt=""
              onClick={() => history.push(`/user/${user.username}`)}
            />
            <UsernameContainer
              onClick={() => history.push(`/user/${user.username}`)}
            >
              @{user.username}
            </UsernameContainer>
          </UserData>
          <SettingsActionButtons>
            {buttons.map((button, i) => (
              <UserActionButton onClick={() => button.action(user.id)} key={i}>
                {button.text}
              </UserActionButton>
            ))}
          </SettingsActionButtons>
        </UserRow>
      ))}
    </UsersListContainer>
  ) : (
    <div>No users found</div>
  );
};

import { useDispatch } from "react-redux";
import { sendFriendRequestStart } from "../../state/profile/actions";
import { FriendshipButton } from "./styled";

export const FriendActionsButton = ({ relationship, id }) => {
  const dispatch = useDispatch();

  let message = "Loading";
  const cssProps = {
    backgroundColor: "transparent",
    color: "black",
  };
  let action = null;
  switch (relationship) {
    case null:
      message = "Add friend";
      cssProps.backgroundColor = "transparent";
      cssProps.color = "black";
      cssProps.hoverColor = "#5f4f7f";
      action = () => dispatch(sendFriendRequestStart(id));
      break;
    case "friends":
      message = "Friend";
      cssProps.backgroundColor = "transparent";
      cssProps.color = "black";
      cssProps.hoverColor = "#113";
      break;
    case "requested":
      message = "Requested";
      cssProps.backgroundColor = "transparent";
      cssProps.color = "black";
      cssProps.hoverColor = "#113";
      break;
    case "received":
      message = "";
      cssProps.backgroundColor = "transparent";
      cssProps.color = "black";
      cssProps.hoverColor = "#113";
      break;
    default:
      break;
  }

  const handleClick = () => {
    if (action) {
      action();
    }
  };

  return (
    <FriendshipButton {...cssProps} onClick={handleClick}>
      {message}
    </FriendshipButton>
  );
};

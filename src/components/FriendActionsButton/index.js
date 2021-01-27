import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  acceptFriendRequestStart,
  cancelFriendRequestStart,
  removeFriendStart,
  sendFriendRequestStart,
} from "../../state/profile/actions";
import { FriendshipButton } from "./styled";

export const FriendActionsButton = ({
  isMe,
  relationship,
  id,
  username,
  requestId,
}) => {
  const dispatch = useDispatch();
  const [isHover, setIsHover] = useState();

  const text = {
    normal: "Loading",
    hover: null,
  };
  const cssProps = {
    backgroundColor: "transparent",
    color: "black",
  };
  let action = null;
  switch (relationship) {
    case null:
      text.normal = "Add friend";
      cssProps.backgroundColor = "transparent";
      cssProps.color = "black";
      cssProps.hoverColor = "#5f4f7f";
      action = () => dispatch(sendFriendRequestStart(id, username));
      break;
    case "friends":
      text.normal = "Friend";
      text.hover = "Remove";
      cssProps.backgroundColor = "#8f83";
      cssProps.color = "black";
      cssProps.hoverColor = "white";
      cssProps.hoverBackgroundColor = "darkred";
      action = () => dispatch(removeFriendStart(id, username));
      break;
    case "requested":
      text.normal = "Received";
      text.hover = "Accept";
      cssProps.backgroundColor = "transparent";
      cssProps.color = "black";
      cssProps.hoverColor = "#113";
      cssProps.hoverColor = "white";
      cssProps.hoverBackgroundColor = "darkgreen";
      action = () => dispatch(acceptFriendRequestStart(id, username));
      break;
    case "received":
      text.normal = "Requested";
      text.hover = "Cancel";
      cssProps.backgroundColor = "transparent";
      cssProps.color = "blue";
      cssProps.hoverColor = "white";
      cssProps.hoverBackgroundColor = "darkred";
      action = () => dispatch(cancelFriendRequestStart(requestId, username));
      break;
    default:
      break;
  }

  return !isMe ? (
    <FriendshipButton
      {...cssProps}
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={() => (action ? action() : null)}
    >
      {isHover && text.hover ? text.hover : text.normal}
    </FriendshipButton>
  ) : null;
};

import { useState } from "react";
import { useDispatch } from "react-redux";
import { sendFriendRequestStart } from "../../state/profile/actions";
import { FriendshipButton } from "./styled";

export const FriendActionsButton = ({ relationship, id }) => {
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
      action = () => dispatch(sendFriendRequestStart(id));
      break;
    case "friends":
      text.normal = "Friend";
      cssProps.backgroundColor = "transparent";
      cssProps.color = "black";
      cssProps.hoverColor = "#113";
      break;
    case "requested":
      text.normal = "Received";
      cssProps.backgroundColor = "transparent";
      cssProps.color = "black";
      cssProps.hoverColor = "#113";
      break;
    case "received":
      text.normal = "Requested";
      text.hover = "Cancel";
      cssProps.backgroundColor = "transparent";
      cssProps.color = "blue";
      cssProps.hoverColor = "white";
      cssProps.hoverBackgroundColor = "darkred";
      break;
    default:
      break;
  }

  return (
    <FriendshipButton
      {...cssProps}
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={() => (action ? action() : null)}
    >
      {isHover && text.hover ? text.hover : text.normal}
    </FriendshipButton>
  );
};

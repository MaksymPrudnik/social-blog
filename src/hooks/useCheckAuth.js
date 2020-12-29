import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export const useCheckAuth = () => {
  const history = useHistory();

  const { username } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!username) {
      history.push("/");
    }
  }, [username, history]);
};

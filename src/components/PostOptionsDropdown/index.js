import { useHistory } from "react-router-dom";
import { Option, OptionsContainer } from "./styled";

export const PostOptionsDropdown = ({ id, isMyPost }) => {
  const history = useHistory();

  return isMyPost ? (
    <OptionsContainer>
      <Option onClick={() => history.push(`/post/${id}`)}>View full</Option>
      <Option onClick={() => console.log("Update")}>Update</Option>
      <Option onClick={() => console.log("Delete")}>Delete</Option>
    </OptionsContainer>
  ) : (
    <OptionsContainer>
      <Option onClick={() => history.push(`/post/${id}`)}>View full</Option>
      <Option onClick={() => console.log("Go to author")}>Go to author</Option>
    </OptionsContainer>
  );
};

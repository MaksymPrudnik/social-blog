import { LikesContainer, LikeHeart, LikesCount } from "./styled";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import { useDispatch } from "react-redux";
import { likePostStart } from "../../state/post/actions";

export const LikesButton = ({ id, isLiked, likesCount }) => {
  const dispatch = useDispatch();
  return (
    <LikesContainer onClick={() => dispatch(likePostStart(id))}>
      <LikeHeart isLiked={isLiked}>
        {isLiked ? <AiFillHeart /> : <AiOutlineHeart />}
      </LikeHeart>
      {likesCount ? <LikesCount>{likesCount}</LikesCount> : null}
    </LikesContainer>
  );
};

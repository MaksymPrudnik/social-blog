import { LikesContainer, LikeHeart, LikesCount } from "./styled";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import { useDispatch, useSelector } from "react-redux";
import { likePostStart } from "../../state/post/actions";

export const LikesButton = ({ id, isLiked, likesCount }) => {
  const dispatch = useDispatch();
  const { currentPost } = useSelector((state) => state.post);
  let isCurrent = false;
  if (currentPost?.id === id) {
    isCurrent = true;
  }
  return (
    <LikesContainer onClick={() => dispatch(likePostStart(id, isCurrent))}>
      <LikeHeart isLiked={isLiked}>
        {isLiked ? <AiFillHeart /> : <AiOutlineHeart />}
      </LikeHeart>
      {likesCount ? <LikesCount>{likesCount}</LikesCount> : null}
    </LikesContainer>
  );
};

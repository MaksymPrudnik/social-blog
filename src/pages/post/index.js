import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AddCommentField } from "../../components/AddCommentField";
import { CommentList } from "../../components/CommentsList";
import { Post } from "../../components/Post";
import { getPostStart } from "../../state/post/actions";
import { PostLoader } from "./loader";
import { PostPageContainer } from "./styled";

export const PostPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [isPostLoaded, setIsPostLoaded] = useState(false);

  const { error, currentPost } = useSelector((state) => state.post);
  const { currentPostComments } = useSelector((state) => state.comment);

  useEffect(() => {
    dispatch(getPostStart(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (currentPost) {
      setIsPostLoaded(true);
    }
  }, [currentPost]);

  if (error) {
    console.log(error);
  }

  return isPostLoaded ? (
    <PostPageContainer>
      <Post {...currentPost.post} id={currentPost.id} isLinkDisabled={true} />
      <AddCommentField id={currentPost.id} />
      <CommentList comments={currentPostComments} />
    </PostPageContainer>
  ) : (
    <PostPageContainer>
      <PostLoader />
    </PostPageContainer>
  );
};

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Post } from "../../components/Post";
import { getPostStart } from "../../state/post/actions";
import { PostLoader } from "./loader";

export const PostPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [isPostLoaded, setIsPostLoaded] = useState(false);

  const { error, currentPost } = useSelector((state) => state.post);
  const { currentPostComments } = useSelector((state) => state.comment);

  useEffect(() => {
    console.log("get post start");
    dispatch(getPostStart(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (currentPost) {
      setIsPostLoaded(true);
    }
  }, [currentPost]);

  console.log(currentPostComments);
  console.log(error, id);
  return (
    <div
      style={{
        width: "100%",
        maxWidth: 800,
        margin: "0 auto",
        marginTop: "3rem",
      }}
    >
      {isPostLoaded ? (
        <Post {...currentPost.post} id={currentPost.id} isLinkDisabled={true} />
      ) : (
        <PostLoader />
      )}
    </div>
  );
};

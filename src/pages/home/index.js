import PostList from "../../components/Posts/PostList";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../components/helpers/Loader/Loader";
import { useEffect } from "react";
import { getPostsListStart } from "../../state/post/actions";
import { LoaderContainer } from "./styled";

export const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostsListStart());
  }, [dispatch]);

  const { isLoading, rows, error } = useSelector((state) => state.post);
  return (
    <div>
      {isLoading ? (
        <LoaderContainer>
          <Loader size="5rem" />
        </LoaderContainer>
      ) : (
        <PostList posts={rows} isPending={isLoading} />
      )}
    </div>
  );
};

import { PostList } from "../../components/PostList";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../components/helpers/Loader/Loader";
import { useEffect } from "react";
import { getFeedStart, getPostsListStart } from "../../state/post/actions";
import { LoaderContainer } from "./styled";

export const Home = ({ isAuthorized }) => {
  const { isLoading, rows } = useSelector((state) => state.post);

  const dispatch = useDispatch();
  useEffect(() => {
    console.log(isAuthorized);
    isAuthorized ? dispatch(getFeedStart()) : dispatch(getPostsListStart());
  }, [dispatch, isAuthorized]);

  return (
    <div>
      {isLoading ? (
        <LoaderContainer>
          <Loader size="5rem" />
        </LoaderContainer>
      ) : (
        <PostList posts={rows} />
      )}
    </div>
  );
};

import React from 'react';

import PostList from '../../Posts/PostList';
import FlashMessage from '../../helpers/FlashMessage/FlashMessage';
import AddPostField from '../../Posts/AddPostField/AddPostField';
import { useSelector, useDispatch } from 'react-redux';
import { getPostListAction } from '../../../state/actions/getPostListAction';
import Loader from '../../helpers/Loader/Loader';
import { useEffect } from 'react';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const from = 0;
    getPostListAction(dispatch, from);
  }, [dispatch]);

  const { isPending, posts, error } = useSelector(state => state.posts);
  const { isLoggedIn } = useSelector(state => state.auth);
  return (
    <div>
      { 
        isLoggedIn ? <AddPostField /> 
        : <FlashMessage message='Sign in to communicate with other users.' color='#f33e'/> 
      }
      { 
        isPending 
        ? <div style={{paddingTop: '40%'}}><Loader size='5rem' /></div>
        : error 
        ? <h2>{error}</h2> 
        : <PostList posts={posts} isPending={isPending}/>
      }
    </div>
  )
}

export default Home;
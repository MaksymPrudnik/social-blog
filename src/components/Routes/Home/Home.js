import React from 'react';

import PostList from '../../Posts/PostList';
import FlashMessage from '../../helpers/FlashMessage/FlashMessage';
import AddPostField from '../../Posts/AddPostField/AddPostField';

const Home = () => {
  return (
    <div>
      <FlashMessage message='Sign in to communicate with other users.' color='#f33e'/>
      <AddPostField />
      <PostList />
    </div>
  )
}

export default Home;
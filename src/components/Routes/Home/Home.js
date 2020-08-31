import React from 'react';

import PostList from '../../Posts/PostList';
import FlashMessage from '../../helpers/Message/FlashMessage';

const Home = () => {
  return (
    <div>
      <FlashMessage message='Create an account to communicate with other users.'/>
      <PostList />
    </div>
  )
}

export default Home;
import React from 'react';

import PostList from '../../Posts/PostList';
import FlashMessage from '../../helpers/FlashMessage/FlashMessage';

const Home = () => {
  return (
    <div>
      <FlashMessage message='Sign in to communicate with other users.' color='#f33e'/>
      <PostList />
    </div>
  )
}

export default Home;
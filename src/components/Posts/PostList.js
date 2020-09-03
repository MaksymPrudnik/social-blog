import React from 'react';

import Post from './Post';

import './PostList.css';

const PostList = ({ posts, isPending}) => {
  return (
    <div className='postlist-container'>
      { posts.length ? posts.map((post, i) => <Post key={i} post={post}/>) : !isPending && <h2>There are no posts yet!</h2>}
    </div>
  )
}

export default PostList;
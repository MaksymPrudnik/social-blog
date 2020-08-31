import React from 'react';

import './Post.css';

const Post = () => {
  return (
    <section className='post-section'>
      <div className='post-description'>
        <span className='post-author'>@MaksymPrudnik</span>
        <span className='post-creation-date-time'>08-31-2020 17:14 PM</span>
        <span className='post-header'>Some header</span>
      </div>
      <div className='post-body'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
      Ratione consectetur voluptatibus maiores doloremque cum commodi aperiam asperiores 
      nobis culpa dolores sint, odit ipsum iure harum porro, similique dolore, animi quam?</div>
      <div className='post-buttons'></div>
      {/* <CommentList className='post-comments' /> */}
    </section>
  )
}

export default Post;
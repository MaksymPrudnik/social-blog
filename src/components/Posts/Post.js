import React from 'react';
import { Link } from 'react-router-dom';
import { BiCommentAdd, BiCommentDetail } from 'react-icons/bi';

import CommentList from './Comments/CommentList';
import AddCommentField from './Comments/AddCommentField';

import './Post.css';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComments: false,
      showAddCommentField: false
    }
  }

  showHideComments = () => {
    this.setState(prev => ({
      ...prev,
      showComments: !this.state.showComments
    }))
  }

  showAddCommentField = () => {
    this.setState(prev => ({
      ...prev,
      showAddCommentField: !this.state.showAddCommentField
    }))
  }

  render() {
    const username = 'maksymprudnik';
    return (
      <section className='post-section'>
        <div className='post-description'>
          <span className='post-author'>
            <Link to={`/user/${username}`} className='link db grow'>
              @{username}
            </Link>
          </span>
          <span className='post-creation-date-time'>08-31-2020 17:14 PM</span>
          <span className='post-header'>Some header</span>
        </div>
        <div className='post-body'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Ratione consectetur voluptatibus maiores doloremque cum commodi aperiam asperiores 
        nobis culpa dolores sint, odit ipsum iure harum porro, similique dolore, animi quam?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur doloribus
        temporibus labore numquam cupiditate quae dignissimos exercitationem quod sed! Adipisci 
        molestias tempore magni nemo perspiciatis rerum ex voluptatibus modi dolores.
        </div>
        <div className='post-buttons'>
          <span className='grow post-icon' onClick={this.showHideComments}><BiCommentDetail /></span>
          <span className='grow post-icon' onClick={this.showAddCommentField}><BiCommentAdd /></span>
        </div>
        { this.state.showComments && <div className='post-comments'><CommentList /></div> }
        { this.state.showAddCommentField && <div className='post-add-comment'><AddCommentField /></div> }
      </section>
    )
  }
}

export default Post;
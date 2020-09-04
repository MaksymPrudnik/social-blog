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
    const { post } = this.props;
    const normCreationTime = new Date(post.createdAt).toLocaleString();
    return (
      <section className='post-section'>
        <div className='post-description'>
          <span className='post-author'>
            <Link to={`/user/${post.createdBy}`} className='link db grow'>
              @{post.createdBy}
            </Link>
          </span>
          <span className='post-creation-date-time'>{normCreationTime}</span>
          <span className='post-header'>{post.header}</span>
        </div>
        <div className='post-body'> { post.body } </div>
        <div className='post-buttons'>
          <span className='grow post-icon' onClick={this.showHideComments}><BiCommentDetail /></span>
          <span className='grow post-icon' onClick={this.showAddCommentField}><BiCommentAdd /></span>
        </div>
        { this.state.showComments && <div className='post-comments'><CommentList comments={post.comments}/></div> }
        { this.state.showAddCommentField && <div className='post-add-comment'><AddCommentField /></div> }
      </section>
    )
  }
}

export default Post;
import React from 'react';
import { Link } from 'react-router-dom';
import { BiCommentAdd, BiCommentDetail, BiEditAlt } from 'react-icons/bi';
import { FaRegEdit, FaRegWindowClose } from 'react-icons/fa';
import { RiDeleteBinLine, RiCheckboxLine } from 'react-icons/ri';

import CommentList from './Comments/CommentList';
import AddCommentField from './Comments/AddCommentField';

import './Post.css';
import { connect } from 'react-redux';
import { updatePostAction } from '../../state/actions/updatePostAction';
import { deletePostAction } from '../../state/actions/deletePostAction';

const mapStateToProps = (state) => ({
  currentUser: state.currentUser.currentUser.username
})

const mapDispatchToProps = dispatch => ({
  updatePostRequest: (token, postId, header, body) => updatePostAction(dispatch, token, postId, header, body),
  deletePost: (token, id) => deletePostAction(dispatch, token, id)
})

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isUpdating: false,
      showComments: false,
      showAddCommentField: false,
      header: this.props.post.header,
      body: this.props.post.body
    }
  }

  updatingPost = () => {
    this.setState(prev => ({
      ...prev,
      isUpdating: !prev.isUpdating
    }))
  }

  showHideComments = () => {
    this.setState(prev => ({
      ...prev,
      showComments: !prev.showComments
    }))
  }

  showAddCommentField = () => {
    this.setState(prev => ({
      ...prev,
      showAddCommentField: !prev.showAddCommentField
    }))
  }

  updateHeader = (text) => {
    this.setState({ header: text })
  }
  updateBody = (text) => {
    this.setState({ body: text })
  }

  updatePost = (token, id, header, body) => {
    this.props.updatePostRequest(token, id, header, body);
    this.updatingPost();
  }

  render() {
    const { currentUser, post, deletePost } = this.props;
    const { isUpdating, showComments, showAddCommentField, header, body } = this.state;
    const token = window.localStorage.getItem('token');
    const createdAt = new Date(post.createdAt).toLocaleString();
    const updatedAt = new Date(post.updatedAt).toLocaleString();
    return (
      <section className='post-section'>
        <div className='post-description'>
          { 
            (currentUser===post.createdBy) ? isUpdating 
            ? <div className='post-actions-div'>
              <RiCheckboxLine onClick={() => this.updatePost(token, post._id, header, body)}/>
              <FaRegWindowClose onClick={this.updatingPost}/>
            </div>
            : <div className='post-actions-div'>
              <FaRegEdit onClick={this.updatingPost}/>
              <RiDeleteBinLine onClick={() => deletePost(token, post._id)}/>
            </div>
            : null
          }
          <span className='post-author'>
            <Link to={`/user/${post.createdBy}`} className='link db grow'>
              @{post.createdBy}
            </Link>
          </span>
          <span className='post-creation-date-time'>{createdAt}</span>
          {
            isUpdating 
            ? <input 
                className='post-updating-header' 
                defaultValue={post.header} 
                onChange={(event) => this.updateHeader(event.target.value)}
              />
            : <span className='post-header'>{post.header}</span>
          }
        </div>
        {
          isUpdating 
          ? <textarea 
              className='post-updating-body' 
              defaultValue={post.body}
              onChange={(event) => this.updateBody(event.target.value)}
            />
          : <div className='post-body'> { post.body } </div>
        }
        {
          (post.createdAt !== post.updatedAt) && <span className='post-updated-at-span'><BiEditAlt />{updatedAt}</span>
        }
        <div className='post-buttons'>
          <span className='grow post-icon' onClick={this.showHideComments}><BiCommentDetail /></span>
          <span className='grow post-icon' onClick={this.showAddCommentField}><BiCommentAdd /></span>
        </div>
        { showComments && <div className='post-comments'><CommentList comments={post.comments}/></div> }
        { showAddCommentField && <div className='post-add-comment'>
            <AddCommentField postOwner={post.createdBy} postId={post._id}/>
          </div> }
      </section>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
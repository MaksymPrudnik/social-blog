import React from 'react';
import { Link } from 'react-router-dom';
import { BiCommentAdd, BiCommentDetail, BiEditAlt } from 'react-icons/bi';
import { FaRegEdit, FaRegWindowClose } from 'react-icons/fa';
import { RiDeleteBinLine, RiCheckboxLine } from 'react-icons/ri';

import CommentList from './Comments/CommentList';
import AddCommentField from './Comments/AddCommentField';

import './Post.css';
import { useSelector, useDispatch } from 'react-redux';
import { updatePostAction } from '../../state/actions/updatePostAction';
import { deletePostAction } from '../../state/actions/deletePostAction';
import { useState } from 'react';
import { useFormInput } from '../../hooks/hooks';

const Post = ({ post }) => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(state => state.currentUser);
  const { isLoggedIn } = useSelector(state => state.auth);
  const [updatingPost, setUpdatingPost] = useState(false);
  const comments = useShowItem(false);
  const addCommentField = useShowItem(false);
  const header = useFormInput(post.header);
  const body = useFormInput(post.body);
  
  const token = window.localStorage.getItem('token');
  const createdAt = new Date(post.createdAt).toLocaleString();
  const updatedAt = new Date(post.updatedAt).toLocaleString();
  return (
    <section className='post-section'>
      <div className='post-description'>
        { 
          currentUser.username===post.createdBy
          ? updatingPost 
          ? <div className='post-actions-div'>
            <RiCheckboxLine onClick={() => {
              updatePostAction(dispatch,token, post._id, header.value, body.value);
              setUpdatingPost(false);
            }}/>
            <FaRegWindowClose onClick={() => setUpdatingPost(false)}/>
          </div>
          : <div className='post-actions-div'>
            <FaRegEdit onClick={() => setUpdatingPost(true)}/>
            <RiDeleteBinLine onClick={() => deletePostAction(dispatch, token, post._id)}/>
          </div>
          : null
        }
        <span className='post-author'>
          <Link to={`/user/${post.createdBy}`} className='link db'>
            @{post.createdBy}
          </Link>
        </span>
        <span className='post-creation-date-time minor-info'>{createdAt}</span>
        {
          updatingPost 
          ? <input 
              className='post-updating-header' 
              { ...header }
            />
          : <span className='post-header'>{post.header}</span>
        }
      </div>
      {
        updatingPost 
        ? <textarea 
            className='post-updating-body' 
            { ...body }
          />
        : <div className='post-body'> { post.body } </div>
      }
      {
        (post.createdAt !== post.updatedAt) && <span className='post-updated-at-span minor-info'><BiEditAlt />{updatedAt}</span>
      }
      { isLoggedIn && <div className='post-buttons'>
        <span className='post-icon' onClick={comments.onClick}><BiCommentDetail /></span>
        <span className='post-icon' onClick={addCommentField.onClick}><BiCommentAdd /></span>
      </div>}
      { comments.showItem && <div className='post-comments'>
          <CommentList comments={post.comments} postOwner={post.createdBy} postId={post._id}/>
        </div> }
      { addCommentField.showItem && <div className='post-add-comment'>
          <AddCommentField postOwner={post.createdBy} postId={post._id}/>
        </div> }
    </section>
  )
}

const useShowItem = (initialState) => {
  const [showItem, setShowItem] = useState(initialState);

  const handleClick = () => {
    setShowItem(!showItem);
  }

  return {
    showItem,
    onClick: handleClick
  }
}

export default Post;
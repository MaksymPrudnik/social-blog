import React from 'react';
import './Comment.css';

import { FaRegWindowClose, FaRegEdit } from 'react-icons/fa';
import { RiCheckboxLine, RiDeleteBinLine } from 'react-icons/ri';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteCommentAction } from '../../../state/actions/deleteCommentAction';
import { updateCommentAction } from '../../../state/actions/updateCommentAction';

const mapStateToProps = state => ({
    currentUser: state.currentUser.currentUser.username
})

const mapDispatchToProps = dispatch => ({
    deleteComment: (token, postId, commentId, postOwner) => deleteCommentAction(dispatch, token, postId, commentId, postOwner),
    updateComment: (token, postId, body, commentId, postOwner) => updateCommentAction(dispatch, token, postId, body, commentId, postOwner)
})

class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isUpdating: false,
            body: this.props.comment.body
        }
    }

    changeBody = text => {
        this.setState({ body: text })
    }

    updatingComment = () => {
        this.setState(prev => ({
            ...prev,
            isUpdating: !prev.isUpdating
        }))
    }

    render() {
        const { comment, postOwner, postId, currentUser, deleteComment, updateComment } = this.props;
        const { isUpdating, body } = this.state;
        const token = window.localStorage.getItem('token');
        const createdAt = new Date(comment.createdAt).toLocaleString();
        return (
            <div className='comment-section'>
                {
                    (comment.createdBy === currentUser) ? isUpdating 
                    ? <div className='post-actions-div'>
                      <RiCheckboxLine 
                        onClick={() => updateComment(token, postId, body, comment._id, postOwner)}
                      />
                      <FaRegWindowClose onClick={this.updatingComment}/>
                    </div>
                    : <div className='post-actions-div'>
                      <FaRegEdit onClick={this.updatingComment}/>
                      <RiDeleteBinLine onClick={() => deleteComment(token, postId, comment._id, postOwner)}/>
                    </div>
                    : null
                }
                <span className='comment-author'>
                    <Link to={`/user/${comment.createdBy}`}>@{comment.createdBy}</Link>
                </span>
                <span className='comment-date'>{createdAt}</span>
                {
                    isUpdating
                    ? <textarea 
                        defaultValue={comment.body} 
                        onChange={e => this.changeBody(e.target.value)}
                    />
                    : <div className='comment-body'>{comment.body}</div>
                }
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
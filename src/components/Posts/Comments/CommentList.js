import React from 'react';
import Comment from './Comment';
import { useSelector } from 'react-redux';
import Loader from '../../helpers/Loader/Loader';

const CommentList = ({ comments, postOwner, postId }) => {
    const { isPending } = useSelector(state => state.comment);
    return (
        <div className='comment-list-section'>
            {
                comments.length 
                ? isPending 
                ? <Loader size='3rem' /> 
                : comments.map((comment, i) => <Comment 
                    comment={comment} 
                    key={i}
                    postId={postId}
                    postOwner={postOwner}
                />)
                : <h3>There're no comments</h3>
            }
        </div>
    )
}

export default CommentList;
import React from 'react';

import PostList from '../../Posts/PostList';
import FlashMessage from '../../helpers/FlashMessage/FlashMessage';
import AddPostField from '../../Posts/AddPostField/AddPostField';
import { connect } from 'react-redux';
import { getPostListAction } from '../../../state/actions/getPostListAction';
import Loader from '../../helpers/Loader/Loader';

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  isPending: state.posts.isPending,
  posts: state.posts.posts,
})

const mapDispatchToProps = dispatch => ({
  requestPosts: (from) => getPostListAction(dispatch, from)
})

class Home extends React.Component {

  componentDidMount() {
    const from = 0;
    this.props.requestPosts(from);
  }

  render() {
    const { isLoggedIn, isPending, posts, error } = this.props;
    return (
      <div>
        { 
          isLoggedIn ? <AddPostField /> 
          : <FlashMessage message='Sign in to communicate with other users.' color='#f33e'/> 
        }
        { error ? <h2>{error}</h2> : <PostList posts={posts} isPending={isPending}/>}
        { isPending && <Loader size='4rem' />}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
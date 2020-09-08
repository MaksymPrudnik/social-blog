import React from 'react';

import PostList from '../../Posts/PostList';
import FlashMessage from '../../helpers/FlashMessage/FlashMessage';
import AddPostField from '../../Posts/AddPostField/AddPostField';
import { connect } from 'react-redux';
import { getPostListAction } from '../../../state/actions/getPostListAction';
import Loader from '../../helpers/Loader/Loader';
import { clearProfileAction } from '../../../state/actions/clearProfileAction';

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  isPending: state.posts.isPending,
  posts: state.posts.posts,
  profile: state.profile.profile
})

const mapDispatchToProps = dispatch => ({
  requestPosts: (from) => getPostListAction(dispatch, from),
  clearProfile: () => dispatch(clearProfileAction())
})

class Home extends React.Component {

  componentDidMount() {
    const from = 0;
    this.props.requestPosts(from);
    if (this.props.profile) {
      this.props.clearProfile();
    }
  }

  render() {
    const { isLoggedIn, isPending, posts, error } = this.props;
    return (
      <div>
        { 
          isLoggedIn ? <AddPostField /> 
          : <FlashMessage message='Sign in to communicate with other users.' color='#f33e'/> 
        }
        { isPending && <Loader size='4rem' />}
        { error ? <h2>{error}</h2> : <PostList posts={posts} isPending={isPending}/>}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../store/actions/postsActions';
const Posts2 = props => {
  const { loading, posts, error, fetchPosts } = props;
  useEffect(() => {
    fetchPosts();
    return () => {};
  }, []);
  if (!posts) return null;
  const renderPosts = () => {
    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>Error {error.message}</h1>;
    if (posts) {
      return posts.map(post => {
        return (
          <div key={post.id}>
            <p>{post.body}</p>
          </div>
        );
      });
    }
  };
  return (
    <div>
      <h1>Posts by Body</h1>

      {renderPosts()}
    </div>
  );
};
const mapStateToProps = state => {
  return {
    loading: state.posts.loading,
    posts: state.posts.posts,
    error: state.posts.error,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Posts2);

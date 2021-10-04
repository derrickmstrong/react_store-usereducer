import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PostsActions } from '../store';

const Posts = () => {
  const { loading, posts, error } = useSelector(state => state.posts);
  console.log(posts);
  const dispatch = useDispatch();
  const { fetchPosts } = bindActionCreators(PostsActions, dispatch);

  useEffect(() => {
    dispatch(fetchPosts);
    return () => {};
  }, []);

  //   if (!posts.posts) return null

  const renderPost = () => {
    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>Error: {error.message}</h1>;
    if (posts) return posts.map(post => <p key={post.id}>{post.title}</p>);
  };
  return (
    <div>
      <h1>Posts</h1>
      {renderPost()}
    </div>
  );
};

export default Posts;

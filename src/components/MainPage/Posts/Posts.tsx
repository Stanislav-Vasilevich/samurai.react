import React from 'react';
import s from './Posts.module.css';
import Post from './Post/Post';

const Posts = () => {
  return (
    <div className={s.posts}>
      <Post/>
    </div>
  );
};

export default Posts;

import React, {useEffect, useState} from 'react';

import {getPostsThunk} from '../../redux/posts';
import {connect} from 'react-redux';
import {IPost} from '../../types';
import {Loader} from '../../components/Loader';
import {Fade} from '@material-ui/core';

interface IProps {
  posts: {
    data: Array<IPost>;
    isLoading?: boolean;
  };
  getPostsThunk: Function;
}

const PagePosts: React.FC<IProps> = ({posts, getPostsThunk}) => {
  const [postsList, setPostsList] = useState(posts.data);
  const [isLoading, setIsLoading] = useState(posts.isLoading);

  useEffect(() => {
    if (!posts.data.length) {
      getPostsThunk();
    }
  }, [getPostsThunk, posts.data.length]);

  useEffect(() => {
    setPostsList(posts.data);
  }, [posts.data]);

  useEffect(() => {
    setIsLoading(posts.isLoading);
  }, [posts.isLoading, getPostsThunk]);

  return (
    <>
      <h1>Статистика</h1>
      {isLoading || !posts.data.length ? <Loader /> : null}
      {postsList.map(({id, title}, idx) => (
        <Fade key={id} in={true} timeout={200 * idx}>
          <div>
            <strong>{idx}.__ </strong> {title}
          </div>
        </Fade>
      ))}
    </>
  );
};

export const Stat = connect((state) => state, {getPostsThunk})(PagePosts);

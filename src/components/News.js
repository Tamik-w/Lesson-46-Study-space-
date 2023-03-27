import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SinglePost from './SinglePost';

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetch('https://dummyjson.com/posts');
      const json = await data.json();
      setNews(json.posts);
    };
    getData();
  }, []);

  return (
    <>
      <h1>News</h1>
      <div className='news-today'>
        {news.map((item) => (
          <Link key={item.id} to={`/news/${item.id}`}>
            <li>{item.title}</li>
          </Link>
        ))}
      </div>
      <SinglePost />
    </>
  );
};

export default News;
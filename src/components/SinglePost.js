import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

const SinglePost = () => {
    const {id} = useParams();
    const [news, setNews] = useState(null);

    useEffect(()=>{
        fetch(`https://dummyjson.com/posts/${id}`)
        .then(res => res.json())
        .then(data => setNews(data))
    },[id])
  return (
    <div>
        {news && (
            <>
            <h1>{news.title}</h1>
            <p >{news.body}</p>
            </>
        )}
    </div>)}
export default SinglePost;
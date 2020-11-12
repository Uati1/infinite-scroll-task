import React, { useState } from 'react';
import PostsSearch from './components/postsSearch/postsSearch';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import Post from './components/visualComponents/post';
import Navigation from './components/visualComponents/nav';
import Loader from './components/messages/loader';
import Error from './components/messages/error';

export default function App() {

  const [pageNumber, setPageNumber] = useState(0)

  const {
    posts,
    hasMore,
    loading,
    error
  } = PostsSearch( pageNumber)

  window.onscroll = () =>{
    if (error || loading || !hasMore) return;
    if (
      window.innerHeight + document.documentElement.scrollTop
      >= document.documentElement.offsetHeight && hasMore
    ) {
      setPageNumber(prevPageNumber => prevPageNumber + 1)
    }
  }
    
    return (
      <>
        <Navigation/>
        <Container>
            { posts.map((post, index) => {
                return <Post post={post} index={index}/>
            })}
        </Container>
        
        
        <div>{loading && <Loader/>}</div>
        <div>{error && <Error/>}</div>
      </>
    );
  }

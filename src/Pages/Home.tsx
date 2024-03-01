import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Search from '../Components/Search'
import IntroPost from '../Components/IntroPost'
import Posts from '../Components/Posts'
import Footer from '../Components/Footer'
import axios from 'axios'

function Home() {
  const baseUrl = '/recipes'

  const [posts, setPosts] = useState([])
  const [orgPosts, setOrgPosts] = useState([])

  useEffect(() => {
    axios.get(baseUrl)
      .then(res => {
        setPosts(res.data.recipes);
        setOrgPosts(res.data.recipes);
      })
      .catch(error => {
        console.error('Error fetching posts from database:', error);
      });
  }, []);

  return (
    <div>
      <Header />
      <Search />
      {posts.length > 0 ? <IntroPost post={posts[0]} /> : null}
      <Posts />
      <Footer />
    </div>
  )
}

export default Home
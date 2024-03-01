import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../Components/Header'
import IntroPost from '../Components/IntroPost'
import ContentPost from '../Components/ContentPost'
import Footer from '../Components/Footer'

function DetailPost() {
  const baseUrl = '/recipes'
  const { id } = useParams()
  const [post, setPost] = useState(null)

  useEffect(() => {
    axios.get(`${baseUrl}/${id}`)
      .then(response => {
        setPost(response.data);
      })
      .catch(error => {
        console.error('Error fetching post:', error);
      });
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <IntroPost post={post} />
      <ContentPost post={post}/>
      <Footer />
    </div>
  )
}

export default DetailPost
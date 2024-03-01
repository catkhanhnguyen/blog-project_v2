import React from 'react'
import Header from '../Components/Header'
import Search from '../Components/Search'
import IntroPost from '../Components/IntroPost'
import Posts from '../Components/Posts'
import Footer from '../Components/Footer'

function Home() {
  const baseUrl = '/recipes'

  return (
    <div>
      <Header />
      <Search />
      <IntroPost />
      <Posts />
      <Footer />
    </div>
  )
}

export default Home